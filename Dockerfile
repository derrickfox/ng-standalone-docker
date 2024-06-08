# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Install Chokidar to improve file watching
RUN npm install chokidar

# Expose port 4200 to the outside world
EXPOSE 4200

# Serve the application
CMD ["npm", "run", "start"]