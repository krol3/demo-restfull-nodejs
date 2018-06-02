.PHONY: build run down help
.DEFAULT_GOAL := help

help:
	@echo  "build:              Build the images "
	@echo  "up:                 Run the containers"
	@echo  "down:               Delete the containers"

build:
	docker-compose build

up:
	docker-compose up

build-container:
	docker build -t krol/crud-api-nodejs:dev .

push-container:
	docker push krol/crud-api-nodejs:dev 

test-container:
	docker run -it -p 3001:8000 -e MONGO_URL=mongo krol/crud-api-nodejs:dev sh
