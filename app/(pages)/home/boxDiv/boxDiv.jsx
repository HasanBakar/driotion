'use client';
import React from 'react';
import Image from 'next/image';
const BoxDiv = () => {
	return (
		<div className='grid lg:grid-cols-4 grid-cols-1 lg:h-40 h-16 my-10 gap-5 w-[95%] mx-auto box-border'>
			<div className='dark:bg-none border-2 border-blue-800  flex flex-col justify-center items-center'>
				<div className='flex justify-between items-center w-[90%] mx-auto'>
					<Image
						src={'/asset/1Website.png'}
						width={60}
						height={60}
						alt=''
					/>
					<h1 className='text-5xl font-bold'>1</h1>
				</div>
				<div className='flex flex-col justify-start'>
					<h1 className='text-[rgb(8,31,63)] dark:text-white lg:text-xl text-base p-10 lg:p-0 font-post-no-bills-regular font-bold'>
						Discovery
					</h1>
					<p>Understanding client goals.</p>
				</div>
			</div>
			<div className='dark:bg-none border-2 border-blue-500  flex flex-col justify-center items-center'>
				<div className='flex justify-between items-center w-[90%] mx-auto'>
					<Image
						src={'/asset/17Website.png'}
						width={60}
						height={60}
						alt=''
					/>
					<h1 className='text-5xl font-bold'>2</h1>
				</div>
				<div className='flex flex-col justify-start'>
					<h1 className='text-[#081f3f] dark:text-white lg:text-xl text-base p-10 lg:p-0 font-post-no-bills-regular font-bold'>
						Strategy
					</h1>
					<p>Crafting a tailored plan and approach.</p>
				</div>
			</div>
			<div className='dark:bg-none border-2 border-blue-800  flex flex-col justify-center items-center'>
				<div className='flex justify-between items-center w-[90%] mx-auto'>
					<Image
						src={'/asset/24Website.png'}
						width={60}
						height={60}
						alt=''
					/>
					<h1 className='text-5xl font-bold'>3</h1>
				</div>
				<div className='flex flex-col justify-start'>
					<h1 className='text-[#081f3f] dark:text-white lg:text-xl text-base p-10 lg:p-0 font-post-no-bills-regular font-bold'>
						Development
					</h1>
					<p>Building and coding the solution.</p>
				</div>
			</div>
			<div className='dark:bg-none border-2 border-blue-500  flex flex-col justify-center items-center'>
				<div className='flex justify-between items-center w-[90%] mx-auto'>
					<Image
						src={'/asset/16Website.png'}
						width={60}
						height={60}
						alt=''
					/>
					<h1 className='text-5xl font-bold'>4</h1>
				</div>
				<div className='flex flex-col justify-start'>
					<h1 className='text-[#081f3f] dark:text-white lg:text-xl text-base p-10 lg:p-0 font-post-no-bills-regular font-bold'>
						Launch
					</h1>
					<p>Deploying the final product live.</p>
				</div>
			</div>
		</div>
	);
};

export default BoxDiv;
