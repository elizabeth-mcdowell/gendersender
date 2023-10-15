from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def testDirectify():
    
    response = client.post(
        "/items/",
        json={"prompt": "Hi David! Hope you're doing well. I'm writing to ask if you've seen the document I sent earlier. I was wondering if you could review it and send me a few comments on how to improve it. Thank you so much! Margarita", "directify": "True"},
    )
    return response.json()['response']

def testPolitify():
    
    response = client.post(
        "/items/",
        json={"prompt": "Hello Margarita, Please send the files I requested earlier. Thank you, David.", "directify": "False"},
    )
    return response.json()['response']

print("Before rephrasing to be more direct: Hi David! Hope you're doing well. I'm writing to ask if you've seen the document I sent earlier. I was wondering if you could review it and send me a few comments on how to improve it. Thank you so much! Margarita")
print(f"After rephrasing to be more direct: {testDirectify()}")

print("Before rephrasing to be more polite: Hello Margarita, Please send the files I requested earlier. Thank you, David.")
print(f"After rephrasing to be more polite: {testPolitify()}")

