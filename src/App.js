import React, { useState } from "react";
import ThemeContext from "./context/context_theme";
import Header from "./components/header";
import Herosection from "./components/Herosection";

const App = () => {
	const themeHook = useState("light");
	return (
		<ThemeContext.Provider value={themeHook}>
			<div>
				<Header />
				<Herosection />
			</div>
		</ThemeContext.Provider>
	);
};
export default App;
