# Utiliser l'image officielle de Node.js
FROM node

# Créer et définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json (si disponible)
COPY . .

# Ajouter un script d'entrée
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Installer nodemon globalement
RUN npm install -g nodemon

# Exposer le port que l'application va utiliser
EXPOSE 3000

# Définir la commande de démarrage du conteneur
ENTRYPOINT ["entrypoint.sh"]