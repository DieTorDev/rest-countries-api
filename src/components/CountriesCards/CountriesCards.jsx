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
import { Link } from 'react-router-dom';
import { DetailsContext } from '../../context/DetailsContext';

const CountriesCards = ({ countries, search }) => {
	const { theme } = useContext(ThemeContext);
	const { setDetails } = useContext(DetailsContext);

	const filteredCountries = filterArray(countries, search);

	return (
		<StyledCardContainer>
			{filteredCountries.map(country => (
				<Link
					to='/details'
					key={country.flag}
					onClick={() => setDetails(country.name.common)}
				>
					<StyledCard $theme={theme}>
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
				</Link>
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
