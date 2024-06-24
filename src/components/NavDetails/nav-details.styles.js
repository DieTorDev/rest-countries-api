import styled from 'styled-components';

const StyledBackButton = styled.button`
	border: none;
	padding-left: 32px;
	font-family: 'Nunito Sans', sans-serif;
	font-size: 14px;
	box-shadow: 0px 0px 40px ${({ $theme }) => ($theme ? '#f2f2f2' : '#202C36')};
	color: ${({ $theme }) => (!$theme ? '#f2f2f2' : '#111517')};
	background-color: ${({ $theme }) => ($theme ? 'white' : '#2B3844')};
	width: 105px;
	height: 32px;
	position: relative;
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		left: 20px;
		top: 7px;
		width: 18px;
		height: 18px;
		background-image: url('/images/arrow-back-icon.svg');
		filter: ${({ $theme }) => (!$theme ? 'invert(1)' : 'invert(0)')};
	}
`;

export { StyledBackButton };
