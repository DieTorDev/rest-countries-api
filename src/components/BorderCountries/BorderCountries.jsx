import { v4 } from 'uuid';
import {
	StyledBorderButton,
	StyledBorderCountries,
	StyledBorderTitle
} from './border-countries.styles';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const BorderCountries = ({ info }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<StyledBorderCountries>
			<StyledBorderTitle $theme={theme}>Border Countries:</StyledBorderTitle>
			<div>
				{info[0].borders.map(border => (
					<StyledBorderButton $theme={theme} key={v4()}>
						{border}
					</StyledBorderButton>
				))}
			</div>
		</StyledBorderCountries>
	);
};

export default BorderCountries;
