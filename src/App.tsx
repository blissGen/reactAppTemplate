import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './layouts/LandingPage/index.js';
// import Test from './layouts/Test';

function App() {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={LandingPage}>
					<LandingPage/>			
				</Route>
			</Switch>
		</div>
	)
}

export default App;
