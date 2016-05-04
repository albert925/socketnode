var $ = require('jquery')
var acc = require('./acciones')
var jshtml = require('./htmljs')

$(inicio_pagina)

function inicio_pagina () {
	$('.cajas').html(jshtml.divs)
	$('.cajas div').mousemove(acc.colorear)
}
