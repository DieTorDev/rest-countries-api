import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import ThemeProvider from './providers/ThemeProvider';

const App = () => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<GlobalStyles />
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
