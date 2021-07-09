from flask import Flask, render_template, request
import json

app = Flask(__name__)


#pages
@app.route('/')
def index():
    print('index')
    return 'index'


@app.route('/chat')
def chat_page():
    return render_template("chat.html")


#api
@app.route('/send_comment', methods = ['post'])
def send_comment():
    author: str = request.form.get('author')
    content: str = request.form.get('content')
    
    file = open('./data/comments.json', 'r')
    
    file_contents: list = json.load(file)
    file.close()
    file_contents.append({"author": author, "content": content})
    file = open('./data/comments.json', 'w')
    json.dump(file_contents, file)
    file.close()

    return 'Comment Sent!'


app.run(host='localhost', port=3000)