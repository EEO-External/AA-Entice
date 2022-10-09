from server import db

class User():
    """
    __tablename__='Users'
    referal=db.Column(db.String(40),primary_key=True)
    username=db.Column(db.String(40))
    password=db.Column(db.String(40))
    status=db.Column(db.String(40))
    #points=db.Column(db.Integer)
    #goal=db.Column(db.Integer)
    referee=db.Column(db.String(40))
    """
    
    def __init__(self, username, password):
        self.username = username
        self.password = password
    