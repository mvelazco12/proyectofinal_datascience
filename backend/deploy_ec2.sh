#!/bin/bash

# Actualizar el sistema e instalar Python y pip
echo "Actualizando el sistema e instalando Python..."
sudo apt update
sudo apt install -y python3 python3-pip

# Instalar dependencias desde requirements.txt
echo "Instalando dependencias..."
pip3 install -r /home/ubuntu/requirements.txt

# Iniciar el servidor Flask con nohup para que siga corriendo
echo "Iniciando el servidor Flask..."
nohup python3 /home/ubuntu/api.py &

echo "Servidor iniciado. Revisa los logs con: tail -f nohup.out"
