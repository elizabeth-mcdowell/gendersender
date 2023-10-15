from fastapi import FastAPI
from model import ChatModel
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    prompt: str
    directify: bool

@app.post("/items/")
async def generate_response(item: Item):
    model = ChatModel(system="", dir="examples", temperature=0.2)

    return {"response": model.say(prompt=item.prompt, directify=item.directify, few_shot=False)}