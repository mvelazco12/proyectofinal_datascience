# Arquitectura del Sistema MeinApp

MeinApp consta de un frontend (app móvil) y un backend (API Flask) conectados mediante HTTP.

## Componentes
- **Frontend**: Aplicación móvil desarrollada con React Native y Expo, alojada en el dispositivo del usuario. Permite escribir mensajes y mostrar los resultados del análisis.
- **Backend**: API RESTful implementada con Flask, desplegada en una instancia EC2 de AWS (18.117.229.246:5001). El servidor Flask se ejecuta directamente en el puerto 5001 usando el servidor de desarrollo de Flask, con un entorno virtual (/home/ubuntu/venv) para dependencias como flask, flask-jwt-extended, torch, y transformers.

## Conexiones
- La app móvil envía solicitudes HTTP POST a http://18.117.229.246:5001/api/analyze con un token JWT para autenticación.
- El desarrollador se conecta a la instancia EC2 mediante SSH (puerto 22) para gestionar el servidor.

## Escalabilidad y Seguridad
- **Seguridad**: Se implementó autenticación JWT con flask-jwt-extended y CORS con flask-cors.
- **Escalabilidad**: Actualmente no se usa un servidor web como Nginx ni balanceo de carga. El servidor de desarrollo de Flask maneja las solicitudes, lo cual es suficiente para esta demo. En un entorno de producción, se recomienda usar un servidor WSGI (como Gunicorn) con Nginx como proxy inverso para mejorar la escalabilidad.
