'use client';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BannerHireButton = () => {
	return (
		<React.Fragment>
			<Link
				href={'/contact'}
				className='btn lg:text-xl text-base backdrop-blur-sm  bg-white/10 text-blue-700 border-none  lg:w-[400px] w-[200px] rounded-md hover:bg-blue-600 hover:text-white hover:font-normal'
			>
				Hire The Best
				<FaArrowRight />
			</Link>
		</React.Fragment>
	);
};

export default BannerHireButton;
