# Use the official lightweight Node.js 14 image.
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --verbose

# Copy the local code to the container's workspace.
COPY public/ public/
COPY src/ src/

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]

