FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT 8080

EXPOSE ${PORT}

CMD ["npm", "start"]
