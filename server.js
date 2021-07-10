const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { v4: uuidV4 } = require('uuid'); 

// Create Server
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// View Engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {

    // Generating unique id for each room
    res.redirect(`/${uuidV4()}`);
});

app.get('/:room', (req, res) => {
    res.render('room', {roomId: req.params.room });
});


const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
