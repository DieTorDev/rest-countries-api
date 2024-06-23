import { v4 } from 'uuid';
import { REGIONS } from '../../constants/region-data';
import {
	StyledInputContainer,
	StyledNav,
	StyledSearchInput,
	StyledSelect
} from './nav-container.styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const NavContainer = ({ region, setRegion }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<StyledNav>
			<StyledInputContainer>
				<StyledSearchInput
					$theme={theme}
					type='text'
					placeholder='Search for a country...'
				/>
			</StyledInputContainer>
			<StyledSelect
				$theme={theme}
				onChange={e => setRegion(e.target.value)}
				name='continents'
				value={region}
				id=''
			>
				{REGIONS.map((element, i) => (
					<option key={v4()} value={i} name={element}>
						{element}
					</option>
				))}
			</StyledSelect>
		</StyledNav>
	);
};

export default NavContainer;
