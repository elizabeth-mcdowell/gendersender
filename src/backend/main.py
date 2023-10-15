from fastapi import FastAPI
from model import ChatModel
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    prompt: str
    directify: str

@app.post("/items/")
async def generate_response(item: Item):
    if item.directify == "True":
        dire = True
    else:
        dire = False
    model = ChatModel(system="", dir="examples", temperature=0.2)
    return {"response": model.say(prompt=item.prompt, directify=dire, few_shot=False)}