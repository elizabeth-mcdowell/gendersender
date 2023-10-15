import yaml 
from yaml import SafeLoader
import config
import openai
import os

class ChatModel:

    def __init__(self, system: str, dir: str, temperature=0.3):

        """Sets up the model with a system prompt and a temperature"""
        openai.api_key = config.api_key
        self.model = openai.ChatCompletion()
        self.system = system
        self.temperature = temperature
        self.dir = dir
        self.messages = []

    def reset(self):
        self.messages = [{"role": "system", "content": self.system}]
    
    def few_shot(self, directify: bool):

        """
        Loads the examples from the given directory and adds them to the messages depending on the direction of translation
        dir: directory of the examples
        directify: when set to true, sets up the model to translate from polite->direct
        """

        if directify:
            before, after = "polite", "direct"
        else:
            before, after = "direct", "polite"

        path = os.path.join(os.getcwd(), self.dir)
        for file in os.listdir(path):
            with open(f"{path}/{file}") as f:
                data = yaml.load(f, Loader=SafeLoader)
                # for polite: the prompt is "can you make the following message more {direct}? {polite message}"
                # for direct: the prompt is "can you make the following message more {polite}? {direct message}"
                self.messages.append({"role": "user", "content": f"Can you make the following message more {after}? {data[before]}"})
                self.messages.append({"role": "assistant", "content": f"{data[after]}"})

    def say(self, prompt: str, directify: bool, few_shot: True):
        
        """Prompts the model for a response. This adds the last user prompt to the messages and prompts the model."""

        self.reset()

        if few_shot:
            self.few_shot(directify=directify)
        
        if directify:
            base = "Please rephrase this message to be more direct semi-formal work email, like how a steoreotypical white man with priviledges would write it. Make it more concise."
        else:
            base = "Please make this message more polite, warm and enthusiastic, while still keeping the tone semi-formal.\n"

        self.messages.append({ "role": "user", "content": base + prompt})
        response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=self.messages, temperature=self.temperature)
        return response.choices[0]["message"]["content"]
