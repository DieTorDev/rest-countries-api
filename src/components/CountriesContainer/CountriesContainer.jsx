import { useEffect, useState } from 'react';
import CountriesCards from '../CountriesCards/CountriesCards';
import NavContainer from '../NavContainer/NavContainer';
import { StyledCountriesContainer } from './countries-container.styles';
import { REGIONS } from '../../constants/region-data';

const CountriesContainer = () => {
	const [countries, setCountries] = useState();
	const [region, setRegion] = useState(0);

	console.log('RENDER');

	useEffect(() => {
		fetchCountries(setCountries, region);
	}, [region]);

	console.log(countries);

	if (countries)
		return (
			<StyledCountriesContainer>
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
		setCountries(json);
	} catch (err) {
		console.error(err);
	}
};

export default CountriesContainer;
