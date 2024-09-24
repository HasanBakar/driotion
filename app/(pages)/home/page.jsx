'use client';
import React, { useState } from 'react';
import LoadingSkeleton from '../../components/extra/loadingSkeleton';
import Banner from './banner/banner';
import TargetedSectors from './targetedSectors/targetedSectors';
import BoxDiv from './boxDiv/boxDiv';
import Services from '../services/page';
export default function Home() {
	const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 3000);
	// }, []);

	return (
		<React.Fragment>
			{isLoading ? (
				<LoadingSkeleton />
			) : (
				<div className=' '>
					<Banner />
					<Services />
					<TargetedSectors />
					<BoxDiv />
				</div>
			)}
		</React.Fragment>
	);
}
