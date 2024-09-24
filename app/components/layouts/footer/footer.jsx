'use client';
import React from 'react';
import { SiGmail } from 'react-icons/si';
import { PiPhonePlusThin } from 'react-icons/pi';
import Link from 'next/link';
import stylesLight from '../../../styles/light.module.css';
import style from '../../../styles/light.module.css';
import stylesDark from '../../../styles/dark.module.css';
import { useTheme } from '../../../context/theme/themeContext';
import Image from 'next/image';
const Footer = () => {
	const { theme } = useTheme();
	const styles = theme === 'dark' ? stylesLight : stylesDark;
	return (
		// <React.Fragment>
		// 	<div className={`footer my-4`}>
		// 		<footer className='footer  lg:p-8 text-base-content mx-auto Footer'>
		// 			<aside>
		// 				<div className=' p-4 rounded-md'>
		// 					{/* <Link href={"/"} className="navbarFont font-medium">
		//         Driotion
		//       </Link> */}
		// 					<Image
		// 						src={'/asset/logoText.png'}
		// 						alt='driotion'
		// 						// placeholder="blur"
		// 						width={120}
		// 						height={80}
		// 						className='mx-10 hidden dark:block'
		// 					/>
		// 					<Image
		// 						src={'/asset/logoTextWhiteMode.png'}
		// 						alt='driotion'
		// 						// placeholder="blur"
		// 						width={120}
		// 						height={80}
		// 						className='mx-10 block dark:hidden'
		// 					/>
		// 				</div>
		// 			</aside>
		// 			{/* <nav className="font-medium">
		//     <h6 className="footer-title commonTextGradient text-xl">Services</h6>
		//     <a className="link link-hover">Branding</a>
		//     <a className="link link-hover">Design</a>
		//     <a className="link link-hover">Marketing</a>
		//     <a className="link link-hover">Advertisement</a>
		//   </nav> */}
		// 			<nav className='font-medium'>
		// 				<h6 className='footer-title dark:text-white text-blue-950 text-xl'>
		// 					Company
		// 				</h6>
		// 				<Link
		// 					href={'/AboutUs'}
		// 					className='link link-hover text-[20px] my-2 dark:text-white text-blue-950 font-medium'
		// 				>
		// 					About us
		// 				</Link>
		// 				<Link
		// 					href={'/ContactUs'}
		// 					className='link link-hover text-[20px] my-2 dark:text-white text-blue-950 font-medium'
		// 				>
		// 					Contact
		// 				</Link>
		// 				{/* <a className="link link-hover">Jobs</a> */}
		// 				<a className='link link-hover text-[20px] my-2 dark:text-white text-blue-950 font-medium'>
		// 					Affiliate
		// 				</a>
		// 			</nav>
		// 			<nav className='font-medium'>
		// 				<h6 className='footer-title dark:text-white text-blue-950 text-xl'>
		// 					Legal
		// 				</h6>
		// 				<a className='link link-hover text-[20px] my-2 dark:text-white text-blue-950 font-medium'>
		// 					Terms of use
		// 				</a>
		// 				<a className='link link-hover text-[20px] my-2 dark:text-white text-blue-950 font-medium'>
		// 					Privacy policy
		// 				</a>
		// 				<a className='link link-hover text-[20px] my-2 dark:text-white text-blue-950 font-medium'>
		// 					Cookie policy
		// 				</a>
		// 			</nav>
		// 		</footer>
		// 	</div>
		// </React.Fragment>
		<React.Fragment>
			<div className='bg-black p-10 mt-20'>
				© 2023-2024 DRIOTION.COM. All Rights Reserved.
			</div>
		</React.Fragment>
	);
};

export default Footer;
