import React from 'react';
import dynamic from 'next/dynamic';
import AboutContent from './aboutContent';

const About = dynamic(() => import('./aboutContent'), { ssr: false });
export const metadata = {
	title: ' About',
	description: 'Software Development Company',
};
const Page = () => {
	return (
		<React.Fragment>
			<div className='overflow-x-hidden'>
				<AboutContent />
			</div>
		</React.Fragment>
	);
};

export default Page;
