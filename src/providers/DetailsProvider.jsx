import { useState } from 'react';
import { DetailsContext } from '../context/DetailsContext';

const DetailsProvider = ({ children }) => {
	const [details, setDetails] = useState();
	return (
		<DetailsContext.Provider value={{ details, setDetails }}>
			{children}
		</DetailsContext.Provider>
	);
};

export default DetailsProvider;
