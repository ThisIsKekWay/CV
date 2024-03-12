from flask import Flask, render_template
from flask_frozen import Freezer
app = Flask(__name__)
freezer = Freezer(app)


@app.route('/')
def hello_world():  # put application's code here
    return render_template('index.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')


@app.route('/contacts')
def contacts():
    return render_template('contacts.html')


if __name__ == '__main__':
    freezer.freeze()
