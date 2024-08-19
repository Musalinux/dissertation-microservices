from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)

@app.route('/register', methods=['POST'])
def register():
        user = {
                        "email": request.json['email'],
                                "password": request.json['password']  # In production, use proper hashing
                                    }
            mongo.db.users.insert_one(user)
                return jsonify(message="User registered successfully"), 201

            @app.route('/login', methods=['POST'])
            def login():
                    user = mongo.db.users.find_one({"email": request.json['email']})
                        if user and user["password"] == request.json['password']:  # Simple check; replace with hashed verification
                                    return jsonify(message="Login successful"), 200
                                    return jsonify(message="Invalid credentials"), 401

                                if __name__ == '__main__':
                                        app.run(debug=True, host='0.0.0.0')

