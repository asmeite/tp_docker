from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/compliment')
def compliment():
    return jsonify(message="You are awesome!")

@app.route('/roast')
def roast():
    return jsonify(message="You could be better!")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
