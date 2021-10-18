from sqlite3 import dbapi2
from mybaccarat import gameStatus as game
from gameDB import gameDAO as db
import numpy as np

database = r"game.db"
conn = db.create_connection(database)

result = db.getAll(conn)
arr = [] # Tạo mảng để chứa kết quả các ván chơi
for i in result:
    print(i[1], end=' ')
    arr.append(i[1])
print()
print()

db_patern = db.getAll_patern(conn)
patern = [] # Tạo mảng để chứa kết quả các patern
for i in db_patern:    
    patern.append(i[1])
   
i = 0 
arr_next_value = [0,1,2] # Tạo mảng để lưu các giá trị tiếp theo của pater trong csdl, cho trước 3 giá trị để tránh trường hợp bị rỗng tại giá trị nào đó
is_exist = 0  # Tạo một biến để kiểm tra xem patern hiện tại có chứa trong csdl không    
while i + len(patern) < len(arr) - 3: # Tạo vòng lặp kiểm tra tất cả csdl hiện tại
    i += 1    
    if np.array_equal(patern,arr[i:i + len(patern)]): # Kiểm tra xem mảng tại vị trí đang xét có bằng patern không
        is_exist = 1            
        arr_next_value.append(arr[i + len(patern) + 1])

status = ""
if is_exist == 1: 
    arr_count = np.bincount(arr_next_value) # Trả về mảng là số lần xuất hiện của 0, 1, 2 trong mảng next_value
    max = arr_count[0]
    if max < arr_count[1]: max = arr_count[1]
    if max < arr_count[2]: max = arr_count[2]
    if max == arr_count[0]:
        status = "Tie"
        print("Chon Tier")        
    elif max == arr_count[1]: 
        status = "Player wins" 
        print("Chon Player")         
    else:
        status = "Banker wins"         
        print("Chon Banker")
else:            
    db.delete_resetvalue_patern(conn,db_patern[len(patern) - 3][0]) # Xóa hết patern, chừa lại 3 row cuối cùng

print(db.getAll_patern(conn))

with conn:
    record = game.Results
    print("Ket qua la:", record)
    id = db.insert(conn, record)

if status == record:
    print("Du doan dung")
    db.insert_patern(conn,record)

else:
    print("Du doan sai")
    db.delete_firstvalue_patern(conn,db_patern[0][0]) # Xóa row đầu tiên trong patern
    db.insert_patern(conn,record)

print(db.getAll_patern(conn))

conn.close()

