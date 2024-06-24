import { useContext } from 'react';
import { StyledDetailsContainer } from './details-container.styles';
import { ThemeContext } from '../../context/ThemeContext';
import NavDetails from '../NavDetails/NavDetails';
import DetailsInfo from '../DetailsInfo/DetailsInfo';

const DetailsContainer = () => {
	const { theme } = useContext(ThemeContext);

	// hacer un useEffect() y un useContext para saber el pais

	return (
		<StyledDetailsContainer $theme={theme}>
			<NavDetails />
			<DetailsInfo />
		</StyledDetailsContainer>
	);
};

export default DetailsContainer;
