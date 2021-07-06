import React from 'react';

import Header from './../../components/Header';
import Body from './../../components/Body';
import Footer from './../../components/Footer';

const LandingPage = ({
	...otherProps 
}) => {
	return (
		<div className="min-h-Full bg-grey-600 font-body">
			<div className="flex flex-col">
				<Header />	
			</div>
			<div>
				<Body />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default LandingPage;
