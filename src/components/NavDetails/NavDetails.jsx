import { useContext } from 'react';
import { StyledBackButton } from './nav-details.styles';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const NavDetails = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<nav>
			<Link to='/'>
				<StyledBackButton $theme={theme} to='/'>
					Back
				</StyledBackButton>
			</Link>
		</nav>
	);
};

export default NavDetails;
