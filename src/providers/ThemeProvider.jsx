import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(true);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
