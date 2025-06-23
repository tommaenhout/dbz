FROM node:23.10.0-alpine

RUN mkdir app

WORKDIR /app

COPY package.json .

RUN npm install 

COPY ./ .

RUN npm run build

RUN npm i -g http-server

EXPOSE 8082

CMD ["http-server", "dist", "-p", "8082", "--cors"]



