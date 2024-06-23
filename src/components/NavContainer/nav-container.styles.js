import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 40px;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const StyledInputContainer = styled.div`
	width: 100%;
	position: relative;

	&::after {
		content: '';
		width: 16px;
		height: 16px;
		position: absolute;
		background-image: url('/images/search-icon.svg');
		top: 17px;
		left: 32px;
	}

	@media (min-width: 768px) {
		width: 480px;
	}
`;

const StyledSearchInput = styled.input`
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: none;
	/* filter: drop-shadow(0px 0px 10px lightgray); */
	padding-left: 74px;
	box-shadow: 0px 0px 40px ${({ $theme }) => ($theme ? '#f2f2f2' : '#202C36')};
	color: ${({ $theme }) => (!$theme ? '#f2f2f2' : '#111517')};
	background-color: ${({ $theme }) => ($theme ? 'white' : '#2B3844')};

	&::placeholder {
		font-size: 12px;
		color: #c4c4c4;
		font-family: 'Nunito Sans', sans-serif;
	}
`;

const StyledSelect = styled.select`
	width: 200px;
	height: 50px;
	padding-inline: 24px;
	border-radius: 5px;
	border: none;
	font-size: 12px;
	font-weight: 600;
	display: flex;
	align-items: center;
	box-shadow: 0px 0px 40px ${({ $theme }) => ($theme ? '#f2f2f2' : '#202C36')};
	color: ${({ $theme }) => (!$theme ? '#f2f2f2' : '#111517')};
	background-color: ${({ $theme }) => ($theme ? 'white' : '#2B3844')};
`;

export { StyledNav, StyledSearchInput, StyledSelect, StyledInputContainer };
