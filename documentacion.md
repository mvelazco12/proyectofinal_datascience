# Documentación - MeinApp

## Introducción
MeinApp es un sistema que analiza el sentimiento de mensajes de texto mediante una aplicación móvil (frontend) y una API RESTful (backend) desplegada en una instancia EC2 de AWS. Este documento detalla la arquitectura, el diseño de la API, la integración, las pruebas y el despliegue.

## Arquitectura del Sistema

### Componentes
- **Frontend**: Aplicación móvil desarrollada con React Native y Expo. Permite a los usuarios ingresar mensajes y visualizar los resultados del análisis. Se ejecuta en dispositivos iOS o Android.
- **Backend**: API RESTful implementada con Flask, desplegada en una instancia EC2 de AWS (18.117.229.246:5001). Utiliza un entorno virtual (/home/ubuntu/venv) con dependencias como flask, flask-jwt-extended, torch, y transformers para procesar el análisis de sentimiento.

### Conexiones
- La app móvil envía solicitudes HTTP POST a `http://18.117.229.246:5001/api/analyze` con un token JWT para autenticación.
- El desarrollador se conecta a la instancia EC2 mediante SSH (puerto 22) para gestionar el servidor.

### Diagrama de Flujo
- **Descripción**: El flujo comienza cuando el usuario escribe un mensaje en la app, que se envía al backend. El backend procesa el texto con un modelo de IA y devuelve los resultados.
- **Archivo**: `diagrama_flujo_analisis.png` (disponible en el repositorio).

### Diagrama de Despliegue
- **Descripción**: Muestra la MacBook del desarrollador, el dispositivo móvil del usuario y la instancia EC2. No incluye Nginx ni balanceo de carga, ya que se usa el servidor de desarrollo de Flask.
- **Archivo**: `diagrama_despliegue.png` (disponible en el repositorio).

### Escalabilidad y Seguridad
- **Seguridad**: Autenticación JWT con `flask-jwt-extended` y CORS con `flask-cors` para permitir solicitudes desde la app móvil.
- **Escalabilidad**: Actualmente no se usa un servidor web como Nginx ni balanceo de carga. El servidor de desarrollo de Flask maneja las solicitudes, adecuado para esta demo. En producción, se recomienda un servidor WSGI (como Gunicorn) con Nginx como proxy inverso.

## Diseño y Documentación de la API RESTful
- **Endpoints**:
  - **POST /api/login**: Autentica al usuario y devuelve un token JWT.
    - Entrada: `{"username": "admin", "password": "password"}`
    - Salida: `{"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}`
  - **POST /api/analyze**: Analiza el sentimiento del texto.
    - Entrada: `{"text": "¡Estoy muy feliz hoy!"}` (con `Authorization: Bearer <token>`)
    - Salida: `{"sentiment": "positivo", "confidence": 0.9973069429397583, "insights": "El texto refleja un estado de ánimo positivo."}`
- **Seguridad**: Autenticación JWT y CORS configurados.
- **Documentación**: Detallada en `api_documentation.md` con ejemplos de solicitud/respuesta.

## Integración y Pruebas
- **Integración**: La app móvil (React Native) se conecta a la API con `axios`. El token JWT se incluye en las solicitudes.
- **Pruebas**:
  - Prueba local con `test_api.py` en la instancia EC2.
  - Prueba externa con `curl` desde la MacBook.
  - Pruebas de usabilidad con mensajes positivos, negativos y neutrales.

## Despliegue Final
- **Instancia EC2**: Desplegada en `18.117.229.246` con Ubuntu. El servidor Flask se ejecuta con `nohup`.
- **App Móvil**: Publicada en la App Store y Google Play con Expo.
- **Documentos**:
  - `manual_uso.md`: Instrucciones para los usuarios.
  - `manual_mantenimiento.md`: Guía para reiniciar el servidor y actualizar el código.
- **Repositorio**: https://github.com/mvelazco12/proyectofinal_datascience.

## Notas Adicionales
- El modelo de IA (`model.safetensors`) no está en GitHub debido a su tamaño (475 MB). Descárgalo manualmente y colócalo en `backend/sentiment_model/`.
- El servidor usa el modo de desarrollo de Flask, no recomendado para producción a largo plazo.
