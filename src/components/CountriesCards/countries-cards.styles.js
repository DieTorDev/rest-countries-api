import styled from 'styled-components';

const StyledCardContainer = styled.section`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
`;

const StyledCard = styled.article`
	width: 264px;
	height: 336px;
	box-shadow: 0px 0px 15px lightgray;
	border-radius: 5px;
	overflow: hidden;
	background-color: #f9f9f9;
	color: #111517;
`;

const StyledFlag = styled.div`
	max-height: 160px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledCardInfo = styled.div`
	padding: 24px;
`;

const StyledCountryName = styled.h2`
	font-size: 18px;
	font-weight: 900;
	margin: 0;
	margin-bottom: 16px;
`;

const StyledCountryInfo = styled.p`
	font-size: 14px;
	margin: 0;
	margin-bottom: 8px;
`;

export {
	StyledCardContainer,
	StyledCard,
	StyledCardInfo,
	StyledCountryName,
	StyledCountryInfo,
	StyledFlag
};