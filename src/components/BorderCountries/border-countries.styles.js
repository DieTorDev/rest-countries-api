import styled from 'styled-components';

const StyledBorderCountries = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
`;

const StyledBorderTitle = styled.h3`
	color: ${({ $theme }) => (!$theme ? '#f2f2f2' : '#111517')};
`;

const StyledBorderButton = styled.button`
	width: 100px;
	height: 30px;
	box-shadow: 0px 0px 40px ${({ $theme }) => ($theme ? '#f2f2f2' : '#202C36')};
	color: ${({ $theme }) => (!$theme ? '#f2f2f2' : '#111517')};
	background-color: ${({ $theme }) => ($theme ? 'white' : '#2B3844')};
	border: none;
	font-weight: 600;
	margin-right: 8px;
	margin-top: 8px;
`;

export { StyledBorderCountries, StyledBorderButton, StyledBorderTitle };
