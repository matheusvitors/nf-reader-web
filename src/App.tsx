import React from "react";
import { Router } from "@/Router";
import { BrowserRouter } from "react-router";
import { SystemThemeProvider } from "@/styles/theme-context";
import GlobalStyles from "@/styles/GlobalStyles";

export const App: React.FC = () => {
	return (
		<SystemThemeProvider>
			<BrowserRouter>
				<GlobalStyles />
				<Router />
			</BrowserRouter>
		</SystemThemeProvider>
	);
};
