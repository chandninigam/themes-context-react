import React, { useContext } from "react";
import ThemeContext from "../context/context_theme";
import Theme from "../color";
import ThemeToggle from "./theme_toggle";

const HeroSection = () => {
	const mytheme = useContext(ThemeContext)[0];
	const currentTheme = Theme[mytheme];
	const [ThemeMode, setThemeMode] = useContext(ThemeContext);
	return (
		<div
			style={{
				padding: "1rem",
				backgroundColor: `${currentTheme.backgroundColor}`,
				color: `${currentTheme.textColor}`,
				textAlign: "center",
			}}
		>
			<h1>Context Api theme toggle</h1>
			<p>This is Nice Para</p>
			<button
				style={{
					backgroundColor: "#26ae68",
					padding: "10px 150px",
					fontSize: "20px",
					color: "#fff",
					border: `${currentTheme.border}`,
				}}
				onClick={() => {
					setThemeMode(ThemeMode === "light" ? "dark" : "light");
				}}
			>
				Click on me!!
			</button>
		</div>
	);
};
export default HeroSection;
