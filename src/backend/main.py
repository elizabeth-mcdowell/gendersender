from fastapi import FastAPI
from model import ChatModel
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    data: str

@app.post("/items/")
def create_item(item: Item):
    return {"data": item.data}
    

@app.get("/project/{prompt}/{directify}")
def read_text(prompt: str, directify: bool):
    model = ChatModel(system="You are a helpful assistant.", dir="examples", temperature=0.2)
    return {"": model.say(prompt=prompt, directify=directify=="True", few_shot=False)}