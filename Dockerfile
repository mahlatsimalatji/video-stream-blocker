FROM node:16

# app directory
WORKDIR /usr/src/app

# Install app dependencies
# ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]