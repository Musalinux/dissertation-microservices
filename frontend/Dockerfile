# Use the official Node.js 14 image from Docker Hub
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install production dependencies.
RUN npm install && npm cache clean --force
RUN npm install @material-ui/core

# Copy the local code to the container's workspace.
COPY public/ public/
COPY src/ src/

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]

