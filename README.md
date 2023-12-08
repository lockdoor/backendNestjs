# Backend NestJS

## Run on local

```sh
# install dependencies
npm i

# copy environment variable
cp .env-example .env

# run
npm run start:dev
```

## Run with Docker

```
docker build -t test .
docker run -p 3000:3000 test
```

## Setup environment

https://labs.iximiuz.com/playgrounds/docker/

github action variable

```
DOCKER_IMAGE

DOCKER_PASSWORD

DOCKER_USERNAME
```

## Run with Docker playground

```
docker run -p 3000:3000 [YOUR_DOCKER_IMAGE]
```

```
docker build --tag natchanoncpf/natchanon-nestjs-helloworld:latest .
docker push natchanoncpf/natchanon-nestjs-helloworld:latest
```
