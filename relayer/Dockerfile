# Use an official Node.js runtime as the parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local src code to the container
COPY . .

CMD ["npm", "start"]