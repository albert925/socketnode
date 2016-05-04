var $ = require('jquery')

module.exports.divs = function () {
	var html = ''
	for (var i = 1; i <= 1000; i++) {
		html += '<div id="v'+i+'" data-id="'+i+'"></div>'
	}
	return html
}