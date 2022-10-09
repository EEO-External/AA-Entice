from urllib import request, response
from flask import Flask, render_template, session, request, redirect, url_for, jsonify
from flask_pymongo import PyMongo
from models import *
app = Flask(__name__)
from pymongo import MongoClient
client = MongoClient("mongodb+srv://kennethri:T2elJXbvg85FayiU@cluster0.fqadzuj.mongodb.net/?retryWrites=true&w=majority")
users = db = client.database.users


sample = {
    "username": "kennyice",
    "password": "1234",
    "status": "active",
    "points": 1200,
    "goal": 5000,
    "referee": "abc123",
    "referal": "cba124"
}

@app.route('/index', methods=['GET', 'POST'])
def index():
    response = jsonify({"test":"test"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        #users.insert_one(sample)
        response = jsonify({"some":"blahhh"})
    else: response = jsonify({"None":"None"})
    
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/dashboard', methods=['GET'])
def dashboard():
    users = [
        {
            "name":"Jane Doe",
            "status": "Link Sent",
            "date": "09/28/22",
        },
        {
            "name":"John Smith",
            "status": "Account Created",
            "date": "09/27/22",
        },
        {
            "name":"Burger King",
            "status": "Verified Customer",
            "date": "09/28/22",
        },
    ]

    response = jsonify(users)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run(debug=True)