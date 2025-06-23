FROM node:23.10.0-alpine

RUN mkdir app

WORKDIR /app

COPY package.json .

RUN npm install 

COPY ./ .

RUN npm run build

RUN npm i -g http-server

EXPOSE 8081

CMD ["http-server", "dist", "-p", "8081", "--cors"]