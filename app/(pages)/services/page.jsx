import dynamic from 'next/dynamic';
import React from 'react';

const Services = dynamic(() => import('./services'), { ssr: false });

const page = () => {
	return (
		<React.Fragment>
			<Services />
		</React.Fragment>
	);
};

export default page;
