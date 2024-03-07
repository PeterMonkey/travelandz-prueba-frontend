FROM node:18

WORKDIR /app

COPY packega*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "start" ]