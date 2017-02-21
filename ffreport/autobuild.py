from flask import Flask
import os
import subprocess

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_folder='./build/html/')


@app.route('/<path:path>')
@app.route('/')
def send_js(path='index.html'):
    return app.send_static_file(path)
    # return send_from_directory('./build/html/', path)


def run(command, output):
    return subprocess.call(command, stdout=output,
                           stderr=output, shell=True)


@app.route('/api/push', methods=['POST', 'GET'])
def rebuild():
    with open("./build/html/log.txt", "w+") as fd:
        run("git fetch", fd)
        run("git reset --hard origin/master", fd)
        run("make book.html", fd)
        run("make book.pdf", fd)
    os.rename("./build/book.pdf", "./build/html/book.pdf")
    return app.send_static_file('log.txt')

if __name__ == "__main__":
    app.run(port=6666, debug=True)
