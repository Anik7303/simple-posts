FROM node:20-alpine3.17

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install && npm install -g nodemon

ENV HOST 127.0.0.1

ENV PORT 5000

EXPOSE 5000

COPY . .

CMD ["npm", "run", "start"]
