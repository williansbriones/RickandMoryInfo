FROM node:18

EXPOSE 80

WORKDIR /web

COPY . .


RUN npm install


CMD [ "npm", "run", "dev" ]