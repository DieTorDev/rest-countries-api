import { useContext, useEffect, useState } from 'react';
import { DetailsContext } from '../../context/DetailsContext';
import {
	StyledInfoContainer,
	StyledInfoFlag,
	StyledInfoName
} from './details-info.styles';
import { ThemeContext } from '../../context/ThemeContext';

const DetailsInfo = () => {
	const [info, setInfo] = useState();
	const { details } = useContext(DetailsContext);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		fetchDetails(details.toLowerCase(), setInfo);
	}, [details, setInfo]);

	if (info)
		return (
			<StyledInfoContainer>
				<StyledInfoFlag>
					<img src={info[0].flags.svg} alt={info[0].flags.alt} />
				</StyledInfoFlag>
				<div>
					<StyledInfoName $theme={theme}>{info[0].name.common}</StyledInfoName>
				</div>
			</StyledInfoContainer>
		);
};

const fetchDetails = async (country, setInfo) => {
	try {
		const response = await fetch(
			`https://restcountries.com/v3.1/name/${country}`
		);
		const json = await response.json();
		setInfo(json);
	} catch (err) {
		console.log(err);
	}
};

export default DetailsInfo;
