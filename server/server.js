const express = require('express');// Import exprerss.js
const app = express(); //The app object conventionally denotes the Express application. Create it by 
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./socket.js');
const server = require('./listen.js');                    //calling the top-level express() function exported by the Express module.


const PORT = 3000;

app.use(cors());

app.use(express.static('public'));

sockets.connect(io, PORT);

server.listen(http,PORT);

                                                                    //Target the build version of the angular app 
                                                                    //created in the "dist" direcotry:

//Route for checking user credentials
