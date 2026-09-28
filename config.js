module.exports = {
	'colors' : {
		'blueLogo':     '#0271CA',
		'blueLogoFont': '#033B7B',
		'redLogo':      '#ff0303',
		'yellowLogo':   '#ffff00',
		'green':        '#5cb85c',
		'orange':       '#F89700',
	},

	'griditem-minwidth': '28ch',

	'primary': 'colors(blueLogo)',
	'secondary': 'adjust-color(primary,$hue: 180deg)',

	'success': 'colors(green)',
	'info': 'colors(blue)',
	'warning': 'colors(yellow)',
	'error': 'colors(red)',

	'radius': '6px',

	'body': {
		'background': 'change-color(primary,$lightness:95%)',
		// 'background': 'colors(greylighter)',
		'block-background': 'change-color(primary,$lightness:99%)',
	},
	'header': {
		'font-color': 'colors(blacklighter)',
		'font-size': '0.85rem',
	},
	'input':{
		'radius': 'radius'
	},
	'btn':{
		'background': 'colors(blueLogoFont)',
		'font-color': 'contrastFW(colors(white),colors(blueLogoFont))',
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