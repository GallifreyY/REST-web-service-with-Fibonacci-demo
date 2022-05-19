FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

RUN git clone https://github.com/GallifreyY/REST-web-service-with-Fibonacci-demo.git
