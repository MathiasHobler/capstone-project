import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './pages';
import Create from './pages/create';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="/create" element={<Create />} />
					</Route>
				</Routes>
				<NavBar />
			</BrowserRouter>
		</>
	);
}
