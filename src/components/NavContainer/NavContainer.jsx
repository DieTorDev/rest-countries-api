import { v4 } from 'uuid';
import { REGIONS } from '../../constants/region-data';
import {
	StyledInputContainer,
	StyledNav,
	StyledSearchInput,
	StyledSelect
} from './nav-container.styles';

const NavContainer = ({ region, setRegion }) => {
	return (
		<StyledNav>
			<StyledInputContainer>
				<StyledSearchInput type='text' placeholder='Search for a country...' />
			</StyledInputContainer>
			<StyledSelect
				onChange={event => setRegion(event.target.value)}
				name='continents'
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
