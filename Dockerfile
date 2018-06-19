FROM node:latest
ADD app.js package.json /app/
ADD bin /app/bin
ADD routes /app/routes
ADD views /app/views
WORKDIR /app
RUN npm install && npm cache clean --force
CMD node bin/www
