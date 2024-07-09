# Utiliser une image Python officielle comme base
FROM python:3.9-slim

# Installer les dépendances
RUN pip install flask

# Copier le fichier de l'application dans le conteneur
COPY app.py /app.py

# Définir le répertoire de travail
WORKDIR /

# Exposer le port sur lequel Flask écoute
EXPOSE 5000

# Commande pour lancer l'application
CMD ["python", "app.py"]
