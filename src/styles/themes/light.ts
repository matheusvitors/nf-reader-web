import { DefaultTheme } from "styled-components"

const primary = '#220081ff'
const secondary = '#D9ED92'
const accent = '#93938C'
const black = '#141414'
const white = '#fcfcfc'


export const light: DefaultTheme = {
	name: 'light',

	colors: {
		primary,
		secondary,
		accent,
		black,
		white,

		success: '#31cb00',
		attention: '#B8B500',
		warning: '#C92020',
	},

	common: {
		background: white,
		text: black,
	},

	iconTheme: '#d6a906ff',

	button: {
		background: primary,
		text: white,
		hover: {
			background: accent,
			text: white,
		}
	},


	input: {
		background: primary,
		border: black,
		text: black,
	},

	modal: {
		background: white,
		text: black,
		shadowColor: black,
	},

	table: {
		borderCell: primary,
		borderRow: secondary,
	},
}

