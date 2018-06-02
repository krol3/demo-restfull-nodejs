FROM node:8-alpine

ADD . src/

WORKDIR /src

RUN npm install
RUN npm install --save-dev nodemon

CMD [ "npm", "run", "dev" ] 