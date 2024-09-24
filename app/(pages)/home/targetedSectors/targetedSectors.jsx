import dynamic from 'next/dynamic';
import React from 'react';

const Sectors = dynamic(() => import('./sectors'), { ssr: false });
const TargetedSectors = () => {
	return (
		<React.Fragment>
			<Sectors />
		</React.Fragment>
	);
};

export default TargetedSectors;
