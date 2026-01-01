# Docker Basics - Hello World App

This repository demonstrates basic Docker commands to build, run, and manage Docker containers for a simple application.

## Docker Commands Covered

- `docker ps`  
  List all running containers.

- `docker exec <process-id> sh`  
  Access a running container’s shell.

- `docker images`  
  List all Docker images on the local machine.

- `docker build`  
  Build a Docker image from a Dockerfile.

- `docker build -t hello-world-app .`  
  Build an image and tag it as `hello-world-app`.

- `docker run -p 3000:3000 -e DATABASE=tejas hello-world-app`  
  Run a container from the image, mapping port 3000 and setting an environment variable `DATABASE`.

## Flags Used

- `-p` : Map container port to host port (e.g., `3000:3000`).
- `-t` : Tag the image with a name.
- `-e` : Set environment variables inside the container.
- `-it` : Run container in interactive mode with a terminal.

## How to Use

1. Build the Docker image:  
    - docker build -t hello-world-app .


2. Run the Docker container:  
    - docker run -p 3000:3000 -e DATABASE=tejas hello-world-app


3. List running containers:  
    - docker ps


4. Access a container shell:  
    - docker exec -it <container-id> sh


Explore and experiment with these commands to get comfortable using Docker for your applications!

# Volumes:
  docker run -p 27017:27017 -v mongo_db_data:/data/db mongo