from mybaccarat import gameStatus as game
from gameDB import gameDAO as db

database = r"game.db"
conn = db.create_connection(database)
with conn:
    # record = game.Results
    # print(record)
    # id = db.insert(conn, record)
    print(db.getAll(conn))
