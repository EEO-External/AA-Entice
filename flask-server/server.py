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