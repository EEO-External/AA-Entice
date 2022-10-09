from uuid import uuid4
from pymongo import MongoClient
from datetime import datetime

client = MongoClient("mongodb+srv://kennethri:T2elJXbvg85FayiU@cluster0.fqadzuj.mongodb.net/?retryWrites=true&w=majority")
users = client.database.users

class User():
    def __init__(self, fname, lname, email, referal = None, id = uuid4().hex):
        
        invalid_id=users.find_one({'id': id})

        while invalid_id != {}:
            id = uuid4().hex
            invalid_id=users.find_one({'id': id})

        self.fname = fname
        self.lname = lname
        self.email = email
        self.referal = referal
        self.status = "Link Sent"
        self.date = datetime.today().strftime('%Y-%m-%d')
        self.id = uuid4().hex
    
    def to_obj(self):
        return {
            "fname": self.fname,
            "lname": self.lname,
            "email": self.email,
            "status": self.status,
            "date": self.date,
            "referal": self.referal,
            "id": self.id
        }
    
    def insert_to_db(self):
        users.insert_one(self.to_obj)

    def getId(self):
        return self.id
    
    def getReferal(self):
        return self.referal
    
    def getStatus(self):
        return self.status
    
    def getStatus(self, status):
        self.status = status


    