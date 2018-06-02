# API products

Dockerize the CRUD api tutorial [Node + Express + MongoDb](https://www.youtube.com/playlist?list=PLb2HQ45KP0WstF2TXsreWRv-WUr5tqzy1)

### technology
- node.js v8.11.2
- npm 5.6.0
- mongodb
- express.js
- Mongoose

### running with docker

```
make build
make up
```

### running locally

```
npm install
npm install --save-dev nodemon
nodejs server.js (without nodemon)
npm run dev			 (with nodemon)
```
### Testing
http://localhost:8000/api/products

### Sample for setting mongodb with user/passowrd

```
>> mongo

use admin
db.auth("root","example")

db.createUser(
  {
    user: "myadmin",
    pwd: "test123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

Successfully added user: {
	"user" : "myadmin",
	"roles" : [
		{
			"role" : "userAdminAnyDatabase",
			"db" : "admin"
		}
	]
}

use node-crud-api
db.createUser(
  {
    user: "mynode",
    pwd: "test123",
    roles: [ { role: "readWrite", db: "node-crud-api" }
    ]
  }
)

Successfully added user: {
	"user" : "mynode",
	"roles" : [
		{
			"role" : "readWrite",
			"db" : "node-crud-api"
		}
	]
}
```

# Material
https://github.com/glaucia86/video-nodejs-mongo-restful-crud
https://docs.mongodb.com/manual/crud/
https://expressjs.com/en/guide/routing.html
https://hub.docker.com/r/library/mongo/
https://hub.docker.com/_/mongo-express/
http://mongoosejs.com/docs/index.html
https://docs.mongodb.com/manual/tutorial/enable-authentication/
https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57