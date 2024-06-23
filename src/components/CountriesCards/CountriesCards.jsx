import { v4 } from 'uuid';
import {
	StyledCard,
	StyledCardContainer,
	StyledCardInfo,
	StyledCountryInfo,
	StyledCountryName,
	StyledFlag
} from './countries-cards.styles';

const CountriesCards = ({ countries }) => {
	return (
		<StyledCardContainer>
			{countries.map(country => (
				<StyledCard key={v4()}>
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

export default CountriesCards;
