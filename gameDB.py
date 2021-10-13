import sqlite3
from sqlite3.dbapi2 import Error

class gameDAO:

    def create_connection(db_file):
        """ create a database connection to the SQLite database
        specified by db_file
        :param db_file: database file
        :return: Connection object or None
        """
        conn = None
        try:
            conn = sqlite3.connect(db_file)
        except Error as e:
            print(e)
        return conn
    
    #singleton
    __instance = None
    @staticmethod
    def get_instance():
        if gameDAO.__instance is None:
            gameDAO.__instance = gameDAO
        return gameDAO.__instance
    
    def insert(conn, status):
        """
        Create a new record into the games table
        :param conn:
        :param game status:
        :return: record id
        """
       
        cur = conn.cursor()
        record = 0;
        if status == "Player wins" :
            record = 1
        elif status == "Banker wins":
            record = 2
        cur.execute('INSERT INTO games(win) VALUES(?)',(record, ))
        conn.commit()
        return cur.lastrowid

    def getAll(conn):
        """
        Query all rows in the games table
        :param conn: the Connection object
        :return:
        """
        cur = conn.cursor()
        cur.execute("SELECT * FROM games")
        sta = []
        rows = cur.fetchall()
        for row in rows:
            if row[1] == 0:
                sta.append(["Tie"])
            elif row[1] == 1:
                sta.append(["Player wins"])
            elif row[1] == 2:
                sta.append(["Banker wins"])
        return sta
