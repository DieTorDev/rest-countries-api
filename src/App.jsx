import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import ThemeProvider from './providers/ThemeProvider';
import DetailsProvider from './providers/DetailsProvider';

const App = () => {
	return (
		<ThemeProvider>
			<DetailsProvider>
				<BrowserRouter>
					<GlobalStyles />
					<Router />
				</BrowserRouter>
			</DetailsProvider>
		</ThemeProvider>
	);
};

export default App;
