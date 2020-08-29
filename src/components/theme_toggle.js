import React, { useContext } from "react";
import ThemeContext from "../context/context_theme";

const ThemeToggle = () => {
	const [ThemeMode, setThemeMode] = useContext(ThemeContext);
	return (
		<div
			onClick={() => {
				setThemeMode(ThemeMode === "light" ? "dark" : "light");
			}}
		>
			<p>{ThemeMode === "Light" ? "Turn Off" : "Turn On"}</p>
		</div>
	);
};
export default ThemeToggle;
