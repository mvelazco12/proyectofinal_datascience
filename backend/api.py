from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['JWT_SECRET_KEY'] = 'clave-secreta-super-segura'  # Cambia esto por una clave única
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 3600  # 1 hora en segundos
jwt = JWTManager(app)

# Cargar el modelo y el tokenizador
model = AutoModelForSequenceClassification.from_pretrained("sentiment_model")
tokenizer = AutoTokenizer.from_pretrained("sentiment_model")
model.eval()

# Mapa de etiquetas
label_map = {0: "negativo", 1: "positivo"}

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    if data.get('username') == 'admin' and data.get('password') == 'password':
        access_token = create_access_token(identity='admin')
        return jsonify({'access_token': access_token}), 200
    return jsonify({'error': 'Credenciales inválidas'}), 401

@app.route('/api/analyze', methods=['POST'])
@jwt_required()
def analyze():
    data = request.get_json()
    print("Received data:", data)
    text = data.get('text')
    print("Extracted text:", text)
    if not text:
        return jsonify({'msg': 'Missing text parameter'}), 422
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    outputs = model(**inputs)
    predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)
    predicted_class = torch.argmax(predictions, dim=1).item()
    confidence = predictions[0][predicted_class].item()
    sentiment = label_map[predicted_class]
    return jsonify({
        'sentiment': sentiment,
        'confidence': confidence,
        'insights': f"El texto refleja un estado de ánimo {sentiment}."
    })
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)