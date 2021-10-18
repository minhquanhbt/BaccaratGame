import sqlite3

#connect to database    
conn = sqlite3.connect('game.db')

#create a cursor
c = conn.cursor()

#create a table
c.execute("""CREATE TABLE games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    win INTEGER NOT NULL
)""")

c.execute("""CREATE TABLE patern (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    TT INTEGER NOT NULL
)""")

#commit command
conn.commit()

#close connection
conn.close()