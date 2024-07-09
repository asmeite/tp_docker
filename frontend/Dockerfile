# Utiliser l'image officielle d'Apache
FROM httpd:latest

# Variables d'environnement
ENV work=/usr/local/apache2/htdocs/
ENV log=/usr/local/apache2/logs/

# Copier les fichiers du site web dans le répertoire de travail
COPY . $work

# Créer un volume pour les logs Apache
VOLUME ["$log"]

# Exposer le port 666
EXPOSE 666

# Configurer Apache pour écouter sur le port 666
RUN sed -i 's/Listen 80/Listen 666/' /usr/local/apache2/conf/httpd.conf
