import { useContext, useEffect, useState } from 'react';
import CountriesCards from '../CountriesCards/CountriesCards';
import NavContainer from '../NavContainer/NavContainer';
import { StyledCountriesContainer } from './countries-container.styles';
import { ThemeContext } from '../../context/ThemeContext';
import { REGIONS } from '../../constants/region-data';

const CountriesContainer = () => {
	const [countries, setCountries] = useState();
	const [region, setRegion] = useState(0);
	const [search, setSearch] = useState('');

	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		fetchCountries(setCountries, Number(region));
	}, [region]);

	if (countries)
		return (
			<StyledCountriesContainer $theme={theme}>
				<NavContainer
					region={region}
					setRegion={setRegion}
					setSearch={setSearch}
				/>
				<CountriesCards countries={countries} search={search} />
			</StyledCountriesContainer>
		);
};

const fetchCountries = async (setCountries, region) => {
	try {
		const response = await fetch(REGIONS[region].url);
		const json = await response.json();
		setCountries(json);
	} catch (err) {
		console.error(err);
	}
};

export default CountriesContainer;
