import styled from 'styled-components';

const StyledCountriesContainer = styled.main`
	padding-inline: 16px;
	padding-top: 24px;
	background-color: ${({ $theme }) => ($theme ? '#f2f2f2' : '#202C36')};

	@media (min-width: 1280px) {
		padding-inline: 80px;
	}
`;

export { StyledCountriesContainer };
