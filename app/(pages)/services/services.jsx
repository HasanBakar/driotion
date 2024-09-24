'use client';
import Image from 'next/image';
import React from 'react';
import peep from '@/public/asset/peep4.svg';
import OurServiceLearnMoreButton from '../../components/common/buttons/ourServiceLearnMoreButton';
import stylesLight from '../../styles/light.module.css';
import stylesDark from '../../styles/dark.module.css';
import { useTheme } from '../../context/theme/themeContext';
const Services = () => {
	const { theme } = useTheme();
	const styles = theme === 'dark' ? stylesLight : stylesDark;
	return (
		<React.Fragment>
			<div
				className={` lg:w-[1200px] mx-auto my-16  overflow-x-hidden dark:bg-[url('/asset/box-6.png')] bg-[url('/asset/box-white2.png')] bg-no-repeat bg-cover bg-opacity-10 bg-center`}
			>
				<div className='flex justify-center items-center '>
					<div className='serviceMan mx-5'>
						<Image src={peep} width={100} height={100} />
					</div>
					<p
						className={`commonTextGradient1 text-xl ml-4 font-bold ${styles.commonTextGradient}`}
					>
						Premium Custom <br /> Software Development Services
					</p>
				</div>
				<div>
					<div className='grid lg:grid-cols-4 grid-cols-1  gap-2 lg:p-4 p-0 mx-auto my-10'>
						{[
							{
								bg: 'bg-[#D3FEE8]',
								title: 'Web Development',
								description:
									'Creating visually captivating and user-friendly websites that engage your audience and elevate your online presence.',
								icon: '/asset/8Mobile.png',
								img: '/asset/webDesign.png',
							},
							{
								bg: 'bg-[#D9D3FF]',
								title: 'App Development',
								description:
									'Creating innovative and user-friendly mobile apps that streamline your business operations and effectively engage your audience.',
								icon: '/asset/8Mobile.png',
								img: '/asset/appDesign.png',
							},
							{
								bg: 'bg-[#D3FEE8]',
								title: 'Database Management',
								description:
									'Optimizing data storage and access with efficient and reliable database management services.',
								icon: '/asset/13program.png',
								img: '/asset/database.png',
							},
							{
								bg: 'bg-[#D9D3FF]',
								title: 'Cloud Service',
								description:
									'Simplifying and optimizing your operations with comprehensive cloud management solutions.',
								icon: '/asset/52Editing.png',
								img: '/asset/cloud.png',
							},
						]?.map((service, index) => (
							<div
								key={index}
								className={`group flex justify-center items-center flex-col rounded-2xl hover:bg-white dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 dark:hover:bg-gradient-to-r from-blue-800 to-blue-950 ${service.bg}`}
							>
								<div className='card-body items-center text-center p-4'>
									<div>
										<Image
											src={service.icon}
											width={80}
											height={80}
										/>
									</div>
									<h2 className='text-xl font-medium text-black dark:text-white dark:group-hover:text-white font-post-no-bills-regular'>
										{service.title}
									</h2>
									<p className='dark:text-white text-blue-950 font-post-no-bills-regular'>
										{service.description}
									</p>
									{/* <div className='my-5'>
										<Image
											src={service.img}
											width={200}
											height={200}
										/>
									</div>
									<div className='card-actions'>
										<OurServiceLearnMoreButton />
									</div> */}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Services;
