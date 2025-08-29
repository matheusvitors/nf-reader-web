import { DefaultTheme } from "styled-components"

const primary = '#194bf1ff'
const secondary = '#D9ED92'
const accent = '#93938C'
const black = '#0d0d0d'
const white = '#fcfcfc';

export const dark: DefaultTheme = {
	name: 'dark',

	colors: {
		primary,
		secondary,
		accent,
		black,
		white,

		success: '#46B93C',
		attention: '#f2f230',
		warning: '#fa0000',
	},

	common: {
		background: '#141414',
		text: white,
	},

	iconTheme: '#b341ffff',

	button: {
		background: primary,
		text: white,
		hover: {
			background: accent,
			text: black,
		}
	},

	input: {
		background: primary,
		border: white,
		text: white,
	},

	modal: {
		background: black,
		text: white,
		shadowColor: white,
	},

	table: {
		borderCell: primary,
		borderRow: secondary,
	},
}
