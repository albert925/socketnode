var $ = require('jquery')
var socketio = require('socket.io-client')
var socket = socketio()

var num = aleatorio(0,8)

module.exports.colorear = function (ev) {
	var colores = ['#006600','#00FF00','#0066CC','#660066','#330066','#404040','#990000','#CC6600','#FFFF00']
	var iddv = $(this).attr('data-id');
	socket.emit('color',{id:iddv,nm:num})
	socket.on('color', function (res) {
		$('#v'+res.id).css({background:colores[res.nm]})	
	})
}

function aleatorio (a,b) {
	var rand = Math.round(Math.random()*(b-a)+parseInt(a))
	return rand
}