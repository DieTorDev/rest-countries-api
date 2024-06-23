import { useContext } from 'react';
import {
	StyledButtonTheme,
	StyledHeader,
	StyledHeaderTitle
} from './header.styles';
import { ThemeContext } from 'styled-components';

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<StyledHeader $theme={theme}>
			<StyledHeaderTitle>Where is the world?</StyledHeaderTitle>
			<StyledButtonTheme $theme={theme} onClick={() => setTheme(!theme)}>
				<img src='/images/dark-mode-icon.svg' alt='dark mode' />
				Dark Mode
			</StyledButtonTheme>
		</StyledHeader>
	);
};

export default Header;
