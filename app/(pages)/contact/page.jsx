import React from 'react';
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';

const Contact = dynamic(() => import('./contact'), { ssr: false });

export const metadata = {
	title: 'Contact',
	description: 'Software Development Company',
};
const page = () => {
	return (
		<React.Fragment>
			<div>
				<Toaster />
				<>
					<Contact />
				</>
			</div>
		</React.Fragment>
	);
};

export default page;
