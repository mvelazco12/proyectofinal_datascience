# Manual de Usuario - MeinApp

## Introducción
MeinApp es una aplicación móvil que permite a los usuarios analizar el sentimiento de mensajes de texto en tiempo real. La app envía el texto a un backend basado en Flask alojado en una instancia EC2 de AWS y muestra los resultados, incluyendo el sentimiento (positivo, negativo o neutral), la confianza y un insight.

## Requisitos
- Dispositivo móvil con iOS o Android.
- Conexión a internet para comunicarse con el servidor backend.
- App MeinApp instalada (disponible en la App Store o Google Play).

## Instrucciones de Uso
1. **Iniciar la Aplicación**
   - Abre la app MeinApp en tu dispositivo móvil.
   - La pantalla inicial mostrará un campo de texto y un botón "Analizar".

2. **Ingresar un Mensaje**
   - Escribe un mensaje en el campo de texto, por ejemplo: "¡Estoy muy feliz hoy!" o "Estoy muy triste".
   - El mensaje puede ser en cualquier idioma compatible con el modelo de IA.

3. **Analizar el Sentimiento**
   - Toca el botón "Analizar".
   - La app enviará el mensaje al servidor backend y esperará la respuesta.

4. **Ver los Resultados**
   - Una vez procesado, la app mostrará:
     - **Sentimiento**: Positivo, negativo o neutral.
     - **Confianza**: Porcentaje de certeza del análisis (ejemplo: 99.73%).
     - **Insight**: Una breve interpretación del estado emocional (ejemplo: "El texto refleja un estado de ánimo positivo").
   - Ejemplo de salida: "Sentimiento: Positivo, Confianza: 99.73%, Insight: El texto refleja un estado de ánimo positivo."

5. **Repetir o Salir**
   - Escribe otro mensaje para un nuevo análisis o cierra la app.

## Solución de Problemas
- **Error de Conexión**: Asegúrate de tener internet. Verifica que el servidor backend esté activo (puedes pedírselo a tu desarrollador).
- **Token Inválido**: Si la app no responde, el token de autenticación pudo haber expirado. Contacta al desarrollador para obtener uno nuevo.
- **Sin Respuesta**: Reinicia la app o verifica con el desarrollador que el servidor Flask esté corriendo.

## Contacto
- Para soporte, contacta al desarrollador: mateovelazco12@gmail.com.
- Repositorio del proyecto: https://github.com/mvelazco12/proyectofinal_datascience.
