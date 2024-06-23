import {
	StyledButtonTheme,
	StyledHeader,
	StyledHeaderTitle
} from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderTitle>Where is the world?</StyledHeaderTitle>
			<StyledButtonTheme>
				<img src='/images/dark-mode-icon.svg' alt='dark mode' />
				Dark Mode
			</StyledButtonTheme>
		</StyledHeader>
	);
};

export default Header;
