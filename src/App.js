import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Detail from './components/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import Home from './pages';
import Bookmark from './pages/bookmark';
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
						<Route path="/bookmark" element={<Bookmark />} />
						<Route path="/detail" element={<Detail />} />
					</Route>
				</Routes>
				<NavBar />
			</BrowserRouter>
		</>
	);
}
