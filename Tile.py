from sqlite3 import dbapi2
from mybaccarat import gameStatus as game
from gameDB import gameDAO as db
import numpy as np

database = r"game.db"
conn = db.create_connection(database)
result25 = []
result25 = db.get25Record(conn)
arr = []
for i in result25:
    arr.append(i[1]) 
arr.reverse()
print("Ket qua 25 van gan nhat: ")
print(arr)

count_arr = np.bincount(arr)
print("Ti le banker: ", (count_arr[1]/25)*100)
print("Ti le player: ", (count_arr[2]/25)*100)
print("Ti le tier: ", (count_arr[0]/25)*100)