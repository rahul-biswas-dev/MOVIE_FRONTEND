# Use official Node.js image as base image
FROM node:14-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Define command to run React application
CMD ["npm", "start"]
