module.exports = {
	'colors' : {
		'blueLogo':     '#0d7cfe',
		'blueLogoFont': '#0032b2',
		'redLogo':      '#ff0303',
		'yellowLogo':   '#ffff00',
		'green':        '#5cb85c',
		'orange':       '#DC6053',
	},

	'griditem-minwidth': '28ch',

	'primary': 'colors(blueLogo)',
	'secondary': 'adjust-color(primary,$hue: 180deg)',

	'success': 'colors(green)',
	'info': 'colors(blue)',
	'warning': 'colors(yellow)',
	'error': 'colors(red)',


	'body': {
		'background': 'change-color(primary,$lightness:95%)',
		// 'background': 'colors(greylighter)',
		'block-background': 'change-color(primary,$lightness:99%)',
	},
	'header': {
		'font-size': '0.85rem',
	},
	'container':{
		'xl'  : '1320px', // 1320px
		// 'lg'  : '960px', // 1140px
		// 'md'  : '960px',
		// 'sm'  : '720px',
		// 'xs'  : '540px',
		// 'xxs' : '100%',
	},
	'link': {
		'font-color': 'colors(blueLogoFont)',
	},
};