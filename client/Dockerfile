FROM node:14.15.0-alpine

WORKDIR /app/client

COPY package.json package-lock.json ./

RUN npm install 

RUN npm install react-scripts@3.4.1 -g 

COPY . ./

EXPOSE 3000