import React from 'react';
import img from './../../assets/00.jpeg';

const Body = ({
	...otherProps 
}) => { 
	return (
		<body>
			<div className="p-10 grid justify-items-center bg-black">
				<img 
					className="object-scale-down max-h-250 cursor-pointer" i
					src={img} alt="img" title="img"
				/>
			</div>
		</body>
	);
};

export default Body;
