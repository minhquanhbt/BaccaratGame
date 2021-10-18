from Tile import TinhTiLe
from game import KiemTraKQ
from fastapi import FastAPI
from pydantic import BaseModel
from mybaccarat import gameStatus as game
from gameDB import gameDAO as db
from fastapi.middleware.cors import CORSMiddleware
from game import DuaGoiY


import uvicorn

app = FastAPI()



origins = [
    CORSMiddleware,
    "http://api.localhost.baccarat.com",
    "https://api.localhost.baccarat.com",
    "http://api.localhost",
    "http://api.localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}   

@app.get("/play")
async def play():       
    g = game.new()     
    conn = db.create_connection("game.db")  
    with conn:
        record = game.Results
        db.insert(conn, record)
    status = DuaGoiY()
    KiemTraKQ(status, record)

    res = {"Banker_Cards": g.Banker_Cards,
    "Player_Cards": g.Player_Cards,
    "Banker_Score": g.Banker_Score,
    "Player_Score": g.Player_Score,
    "Results": g.Results,
    "Predict": status}
    return res

@app.get("/predict")
async def predict():
    # Trả về gợi ý cho ván tiếp theo
    # Đưa ra tỉ lệ của kết quả những ván vừa chơi
    status = DuaGoiY()    
    arr = TinhTiLe()
    res = {"Predict": status,
    "Banker": arr[2],
    "Player": arr[1],
    "Tier": arr[0]}
    return res


if __name__ == "__main__":
    uvicorn.run("api:app", host="api.localhost", port=8000, log_level="info")