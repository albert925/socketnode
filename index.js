var http = require('http')
var path = require('path')
var express = require('express')
var bodyparse = require('body-parser')
var cookieparse = require('cookie-parser')
var socketio = require('socket.io')
var port = process.env.PORT || 3000

var app = express()
var servidor = http.createServer(app)
var io = socketio(servidor)

app.use(cookieparse())
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyparse.urlencoded({extended: false}))
app.use(bodyparse.json())

app.get('/', function (req, res) {
	res.render('index.html')
})

io.on('connection', function (socket) {
	console.log(socket.id)
	socket.on('color', function (div) {
		io.sockets.emit('color',div)
	})
})

servidor.listen(port, function () {
	console.log('servidor en ' + port)
})