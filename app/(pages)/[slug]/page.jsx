import React from 'react';
import Home from '../home/page';
import About from '../about/page';

export default async function Page({ params: { slug = 'home' } }) {
	slug = slug.toLowerCase();
	return (
		<>
			{slug === 'home' && <Home />}
			{slug === 'about' && <About />}
			{/* {slug === 'services' && <Services />} */}
		</>
	);
}

// export async function generateStaticParams() {}

// export async function generateMetadata({ params: { slug = 'home' } }) {
// 	// if (!page && slug === 'home') {
// 	//   page = staticHome
// 	// }

// 	return generateMeta({ doc: page });
// }
