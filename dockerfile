FROM node:18

EXPOSE 80

WORKDIR /web

COPY . .


RUN npm install -f



CMD [ "npm", "run", "dev" ]