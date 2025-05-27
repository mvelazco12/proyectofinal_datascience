import requests

# Obtener el token
login_url = "http://18.117.229.246:5001/api/login"
login_data = {"username": "admin", "password": "password"}
response = requests.post(login_url, json=login_data)
token = response.json().get("access_token")
print("Token:", token)

# Probar el análisis
analyze_url = "http://18.117.229.246:5001/api/analyze"
headers = {"Authorization": f"Bearer {token}"}
analyze_data = {"text": "¡I am so happy!"}
response = requests.post(analyze_url, json=analyze_data, headers=headers)
print(response.json())