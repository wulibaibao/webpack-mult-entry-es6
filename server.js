const express = require('express')

const server = express()

server.listen( 8888 , () => console.log( `this server is running at PORT 8888`) )

server.use('/' , express.static('dist'))