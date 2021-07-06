import React from 'react';
//import img from './../../assets/00.jpeg';

const Footer = ({
	...otherProps 
}) => { 
	return (
		<footer className="bg-blue-100 max-h-60">
			<div className="w-full max-w-7xl align-middle mx-auto p-5">
				<span className=""> 
					copyright © 2021
				</span>
			</div>
		</footer>
	);
};

export default Footer;
