# Use an official Node.js runtime as the base image
FROM node:16

# Copy package.json and package-lock.json files for both client and backend to /app in the container
COPY ./client/package*.json /app/client/
COPY ./backend/package*.json /app/backend/

# Set a working directory for the client within the container
WORKDIR /app/client

# Install client dependencies
RUN npm install

# Set a working directory for the backend within the container
WORKDIR /app/backend

# Install backend dependencies
RUN npm install

# Copy the entire project folder to /app in the container
COPY . /app/

# Set a working directory for the client within the container
WORKDIR /app/client

# Build the client application
RUN npm run build

# Set a working directory for the backend within the container
WORKDIR /app/backend

# Expose the port your Node.js server will listen on (replace 3000 with your server's port)
EXPOSE 5000

# Define the command to start your Node.js server (replace with your server's start command)
CMD ["npm", "start"]
