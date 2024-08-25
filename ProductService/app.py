from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

products = [
    {"id": 1, "name": "RPI", "price": 999.99, "image": "https://dissertation-images-654654166286.s3.amazonaws.com/rpi.jpg", "description": "RPI"},
    {"id": 2, "name": "Flipper", "price": 1200, "image": "https://dissertation-images-654654166286.s3.amazonaws.com/flipper0.jpg", "description": "Flipper Device"},
    {"id": 3, "name": "Wifi", "price": 250, "image": "https://dissertation-images-654654166286.s3.amazonaws.com/wifi.jpg", "description": "WiFi Hacking Device"},
    {"id": 4, "name": "Bluetooth Device", "price": 5000, "image": "https://dissertation-images-654654166286.s3.amazonaws.com/bt.jpg", "description": "Bluetooth 2.0 Device"},
    {"id": 5, "name": "Mic", "price": 2350, "image": "https://dissertation-images-654654166286.s3.amazonaws.com/micjpg.jpg", "description": "Malicious Mic"},
    {"id": 5, "name": "Wifi upgraded", "price": 4250, "image": "https://dissertation-images-654654166286.s3.amazonaws.com/wifi2.jpg", "description": "WiFi 2.0 Enhanced Device"},
    {"id": 6, "name": "Rubber Ducky", "price": 1350, "image": "https://dissertation-images-654654166286.s3.amazonaws.com/rubber.jpg", "description": "Rubber Ducky for password stealing"},
    {"id": 7, "name": "SDR", "price": 4000, "image": "https://dissertation-images-654654166286.s3.amazonaws.com/sdr.jpg", "description": "SDR Device for frequency manipulation"},
    {"id": 8, "name": "Bad USB", "price": 3700, "image": "https://dissertation-images-654654166286.s3.amazonaws.com/badusb.jpg", "description": "Bad USB for corrupting devices"}
]

@app.route('/products', methods=['GET'])
def list_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
