from sqlite3 import dbapi2
from mybaccarat import gameStatus as game
from gameDB import gameDAO as db
import numpy as np

database = r"game.db"
# conn = db.create_connection(database)

# # result = db.getAll(conn)
# # arr = []
# # for i in result:    
# #     arr.append(i[1])
# conn.close()

def DuaGoiY():  
    conn = db.create_connection(database)
    db_patern = db.getAll_patern(conn)
    result = db.getAll(conn)
    arr = []
    for i in result:    
        arr.append(i[1]) 
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
        arr_count = np.bincount(arr_next_value)
        max = arr_count[0]
        if max < arr_count[1]: max = arr_count[1]
        if max < arr_count[2]: max = arr_count[2]
        if max == arr_count[0]:
            status = "Tier"
            print(status)
            return status                    
        elif max == arr_count[1]: 
            status = "Player wins" 
            print(status)
            return status         
        else:
            status = "Banker wins" 
            print(status)        
            return status
    else:            
        db.delete_resetvalue_patern(conn,db_patern[len(patern) - 3][0]) # Xóa hết patern, chừa lại 3 row cuối cùng
        return 0    

def KiemTraKQ(status, result): 
    conn = db.create_connection(database)
    db_patern = db.getAll_patern(conn)
    if status == result:
        print("Du doan dung")
        db.insert_patern(conn,result)
    else:
        print("Du doan sai")
        db.delete_firstvalue_patern(conn,db_patern[0][0]) # Xóa row đầu tiên trong patern
        db.insert_patern(conn,result)   



