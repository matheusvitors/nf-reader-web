import 'styled-components';

/**
 * Este arquivo serve para sobrescrever a tipagem DefaultTheme no styled-component do sistema
 */

interface CommomProps {
	background: string;
	text: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
		name: string,

		colors: {
			primary: string;
			secondary: string;
			accent: string;
			black: string;
			white: string;

			success: string,
			attention: string,
			warning: string,
		}

		common: {
			background: string,
			text: string;
		},

		iconTheme: string;

		button: {
			background: string,
			text: string,
			hover: CommomProps;
		},


		input: {
			background: string,
			border: string,
			text: string,
		},

		modal: {
			background: string;
			text: string;
			shadowColor: string;
		},

		table: {
			borderRow: string;
			borderCell: string;
		},
	};
}
