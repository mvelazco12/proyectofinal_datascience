# App Sentimientos 

## Descripción
App Sentimientos es una aplicación móvil que permite predecir el estado emocional de un texto como **positivo** o **negativo**.  
El backend está desarrollado en Python usando **Flask** y está desplegado en un servidor AWS para procesar las solicitudes de la app móvil.

## Características
- Clasificación binaria: emociones positivas o negativas.
- Backend REST API con Flask alojado en AWS.
- Comunicación móvil con la API para enviar texto y recibir predicción.
- Arquitectura sencilla, ideal para pruebas y demostraciones iniciales.

## Tecnologías
- Python 3.x
- Flask
- AWS (EC2 o similar) para despliegue del backend
- React Native (u otro framework móvil) para la app cliente
- Git y GitHub para control de versiones

## Instalación y Despliegue

### Backend (Flask en AWS)

1. Conectar al servidor AWS (EC2) vía SSH.
2. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/app-sentimientos.git
   cd app-sentimientos/backend
