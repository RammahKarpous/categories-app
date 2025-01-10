import React from 'react';
import ReactDOM from 'react-dom/client';

// Pages
import Home from './pages/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
// Layouts

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
