# Base image
# FROM --platform=linux/amd64 node:21-alpine
FROM node:21-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# setup deps
RUN apk update \
  && apk add openssl \
  && apk cache clean

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# init DB
RUN ls -la 
RUN cp .env-example .env
RUN npm run prisma:deploy


# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]