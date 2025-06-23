FROM node:23.10.0-alpine

RUN mkdir app

WORKDIR /app

COPY package.json .

RUN npm install 

COPY ./ .

RUN npm run build

RUN npm i -g serve

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080", "--cors"]
