from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = {
    "1": {"id": 1, "name": "Musaddik Vasaikar", "email": "musaddik@microservices.com"},
    "2": {"id": 2, "name": "Docker", "email": "docker@kubernetes.com"}
}

@app.route('/users/<user_id>', methods=['GET'])
def get_user(user_id):
    user = users.get(user_id, {})
    return jsonify(user)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

