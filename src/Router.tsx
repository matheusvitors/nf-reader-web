import React from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "@/pages";

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
		</Routes>
	);
};
