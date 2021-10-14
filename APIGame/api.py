from fastapi import FastAPI
from pydantic import BaseModel
from mybaccarat import gameStatus as game
from gameDB import gameDAO as db

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}   

@app.get("/play")
def play():
    g = game
    res = {"Banker_Cards": g.Banker_Cards,
    "Player_Cards": g.Player_Cards,
    "Banker_Score": g.Banker_Score,
    "Player_Score": g.Player_Score,
    "Results": g.Results}
    return res