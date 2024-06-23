import { useContext, useEffect, useState } from 'react';
import CountriesCards from '../CountriesCards/CountriesCards';
import NavContainer from '../NavContainer/NavContainer';
import { StyledCountriesContainer } from './countries-container.styles';
import { REGIONS } from '../../constants/region-data';
import { ThemeContext } from 'styled-components';

const CountriesContainer = () => {
	const [countries, setCountries] = useState();
	const [region, setRegion] = useState(0);

	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		console.log('RENDER');

		fetchCountries(setCountries, region);
	}, [region]);

	if (countries)
		return (
			<StyledCountriesContainer $theme={theme}>
				<NavContainer region={region} setRegion={setRegion} />
				<CountriesCards countries={countries} />
			</StyledCountriesContainer>
		);
};

const fetchCountries = async (setCountries, region) => {
	try {
		const response = await fetch(
			`https://restcountries.com/v3.1/region/${REGIONS[region]}`
		);
		const json = await response.json();
		const unMememers = json.filter(country => country.unMember);
		setCountries(unMememers);
	} catch (err) {
		console.error(err);
	}
};

export default CountriesContainer;
