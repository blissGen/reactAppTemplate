import React from 'react';
import img from './../../assets/00.jpeg';

const Body = ({
	...otherProps 
}) => { 
	return (
		<body>
			<div className="p-10 grid justify-items-center">
				<img className="object-scale-down max-h-60" src={img} alt="img"/>
			</div>
		</body>
	);
};

export default Body;
