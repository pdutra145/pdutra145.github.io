FROM node:21.5.0

WORKDIR /app

COPY package*.json ./

RUN npm install && npm rebuild

COPY . .

CMD ["npm", "run", "deploy"]


# CMD [ "gatsby", "build", "&&", "gatsby", "serve" ]