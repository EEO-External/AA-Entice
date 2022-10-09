from urllib import request, response
from flask import Flask, render_template, session, request, redirect, url_for, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_session import Session
from flask_mongoengine import MongoEngine
from flask_mongo_sessions import MongoDBSessionInterface
from config import ApplicationConfig
from models import *


app = Flask(__name__)
app.config.from_object(ApplicationConfig)


cors = CORS(app, supports_credentials=True)
bcrypt = Bcrypt(app)
server_session = Session(app)


@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        #users.insert_one(sample)
        response = jsonify({"some":"blahhh"})
    else: response = jsonify({"None":"None"})
    
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    app.run(debug=True)