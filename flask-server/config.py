from flask_mongo_sessions import MongoDBSessionInterface

class ApplicationConfig:
    SECRET_KEY = '35YaH8y1pzXF_YZ7RBbSnA'

    SESSION_TYPE = "mongodb"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
