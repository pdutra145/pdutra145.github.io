FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

# RUN npm run build

COPY build .

# Your app binds to port 5000 by default, so expose it
EXPOSE 3000

# Define the command to run the app
ENTRYPOINT ["npm", "run"]