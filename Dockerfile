FROM node:16

# Set the working directory in the container
WORKDIR /user/Документы/mybrary

# Copy the application files into the working directory
COPY . .

# Install the application dependencies
RUN npm install

# Define the entry point for the container
CMD ["npm", "start"]

EXPOSE 3000