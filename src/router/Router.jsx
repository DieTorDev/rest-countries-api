import { Route, Routes } from 'react-router-dom';
import Countries from '../pages/Countries';
import Layout from '../Layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Countries />} />
			</Route>
		</Routes>
	);
};

export default Router;
