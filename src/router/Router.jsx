import { Route, Routes } from 'react-router-dom';
import Countries from '../pages/Countries';
import Details from '../pages/Details';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Countries />} />
				<Route path='/details' element={<Details />} />
			</Route>
		</Routes>
	);
};

export default Router;
