from flask import Flask, render_template, request, redirect
import json

HOST = "localhost"
PORT = 3000

app = Flask(__name__)


def getURL (dir: str) -> str:
    global HOST
    global PORT
    return f"http://{HOST}:{str(PORT)}/{dir}"


#pages
@app.route('/')
def index():
    print('index')
    return render_template('index.html')


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

    return redirect(getURL('chat'))



@app.route('/view_comments', methods = ['get'])
def view_comments():
    file = open('./data/comments.json', 'r')
    return file.read()


app.run(host= HOST, port=PORT)