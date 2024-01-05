FROM node

COPY package*.json /app

WORKDIR /app

RUN npm install

RUN npm run build

COPY build .

# Your app binds to port 5000 by default, so expose it
EXPOSE 5000

# Define the command to run the app
CMD ["npm", "run", "start:prod"]