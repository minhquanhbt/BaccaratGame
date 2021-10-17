import sqlite3
from mybaccarat import gameStatus as game
from gameDB import gameDAO as db

#connect to database    
conn = sqlite3.connect('game.db')

#create a cursor
c = conn.cursor()

#create a table
c.execute("""CREATE TABLE games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    win INTEGER NOT NULL
)""")

#Generate 500 record
for i in range(500):
    database = r"game.db"
    conn = db.create_connection(database)
    g = game.new()
    record = g.Results
    db.insert(conn, record)

print("successfully created")

#commit command
conn.commit()

#close connection
conn.close()