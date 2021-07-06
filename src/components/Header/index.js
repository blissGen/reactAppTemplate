import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({
	...otherProps 
}) => { 
	const [active, setActive] = useState(false); 

	const onClick = () => {
		setActive(!active);
	}

	return (
		<header className="bg-blue-100 relative p-5">
			<div className="mx-auto flex items-center justify-between">
				<p className="text-2xl">	
					$slvrhnd
				</p>
				<div 
					onClick={ onClick }
					className={`
						md:hidden text-2xl cursor-pointer
					`}	
				>
					...
				</div>
				<nav
					className={`
						${!active && 'hidden'} 
						absolute flex flex-col bg-blue-100 top-full w-full left-0 z-20
						float-right
						md:static md:w-auto md:flex-row md:flex
					`}				
				>
					<ul className="md:flex-row md:flex">
						<li className="list-none md:mr-5 ">
							<Link
								className="flex w-full text-base hover:text-indigo-500 
								cursor-pointer p-5"
							>
								test
							</Link>
						</li>
						<li className="list-none md:mr-5">
							<Link
								className="flex w-full text-base hover:text-indigo-500 
								cursor-pointer p-5"
							>
								test
							</Link>
						</li>
						<li className="list-none md:mr-5">
							<Link
								className="flex w-full text-base hover:text-indigo-500 
								cursor-pointer p-5"
							>
								test
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};	
export default Header;
