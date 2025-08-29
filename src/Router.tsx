import { HomePage } from "@/home-page";
import React from "react";
import { Routes, Route } from "react-router";

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
		</Routes>
	);
};
