import dynamic from 'next/dynamic';
import React from 'react';

const Tech = dynamic(() => import('./tech'), { ssr: false });
const Technologies = () => {
	return (
		<React.Fragment>
			<Tech />
		</React.Fragment>
	);
};

export default Technologies;
