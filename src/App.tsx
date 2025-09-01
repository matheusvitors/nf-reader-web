import React from "react";
import { Router } from "@/Router";
import { BrowserRouter } from "react-router";
import { SystemThemeProvider } from "@/styles/theme-context";
import GlobalStyles from "@/styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App: React.FC = () => {
	const queryClient = new QueryClient();

	return (
		<SystemThemeProvider>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<GlobalStyles />
					<Router />
				</BrowserRouter>
			</QueryClientProvider>
		</SystemThemeProvider>
	);
};
