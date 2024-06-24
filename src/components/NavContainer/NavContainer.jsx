import { REGIONS } from '../../constants/region-data';
import {
	StyledInputContainer,
	StyledNav,
	StyledSearchInput,
	StyledSelect
} from './nav-container.styles';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const NavContainer = ({ region, setRegion, setSearch }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<StyledNav>
			<StyledInputContainer>
				<StyledSearchInput
					$theme={theme}
					onInput={({ target }) => setSearch(target.value)}
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
					<option key={element.id} value={i} name={element}>
						{element.region}
					</option>
				))}
			</StyledSelect>
		</StyledNav>
	);
};

export default NavContainer;
