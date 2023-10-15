from fastapi import FastAPI
from model import ChatModel
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

class Item(BaseModel):
    prompt: str
    directify: str

origins = [
    "http://localhost:3000",  # This is where our React app will be running
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/data")
async def generate_response(data: Item):

    if data.directify == "True":
        dire = True
    else:
        dire = False
    model = ChatModel(system="", dir="examples", temperature=0.2)
    response = model.say(prompt=data.prompt, directify=dire, few_shot=False)
    print(response)
    return {"response": response}

@app.get("/data")
def read_data():
    return {"message": "Hello from FastAPI!"}