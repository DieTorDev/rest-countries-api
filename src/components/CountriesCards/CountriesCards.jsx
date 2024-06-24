import {
	StyledCard,
	StyledCardContainer,
	StyledCardInfo,
	StyledCountryInfo,
	StyledCountryName,
	StyledFlag
} from './countries-cards.styles';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const CountriesCards = ({ countries, search }) => {
	const { theme } = useContext(ThemeContext);

	const filteredCountries = filterArray(countries, search);

	return (
		<StyledCardContainer>
			{filteredCountries.map(country => (
				<StyledCard $theme={theme} key={country.flag}>
					<StyledFlag>
						<img src={country.flags.svg} alt={country.flags.alt} />
					</StyledFlag>
					<StyledCardInfo>
						<StyledCountryName>{country.name.common}</StyledCountryName>
						<StyledCountryInfo>
							<strong>Population:</strong> {country.population}
						</StyledCountryInfo>
						<StyledCountryInfo>
							<strong>Region:</strong> {country.region}
						</StyledCountryInfo>
						<StyledCountryInfo>
							<strong>Capital:</strong> {country.capital}
						</StyledCountryInfo>
					</StyledCardInfo>
				</StyledCard>
			))}
		</StyledCardContainer>
	);
};

const filterArray = (countries, search) => {
	if (search !== '')
		return countries.filter(country =>
			country.name.common.toLowerCase().includes(search.toLowerCase())
		);
	return countries;
};

export default CountriesCards;
