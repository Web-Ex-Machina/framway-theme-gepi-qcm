module.exports = {
	'colors' : {
		'blueLogo':     '#0d7cfe',
		'blueLogoFont': '#0032b2',
		'redLogo':      '#ff0303',
		'yellowLogo':   '#ffff00',
		'green':        '#5cb85c',
		'orange':       '#DC6053',
	},

	'primary': 'colors(blueLogo)',
	'secondary': 'adjust-color(primary,$hue: 180deg)',

	'success': 'colors(green)',
	'info': 'colors(blue)',
	'warning': 'colors(yellow)',
	'error': 'colors(red)',

	'link': {
		'font-color': 'colors(blueLogoFont)',
	},
};