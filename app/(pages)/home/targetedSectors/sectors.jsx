'use client';
import React from 'react';
import stylesLight from '../../../styles/light.module.css';
import stylesDark from '../../../styles/dark.module.css';
import { useTheme } from '../../../context/theme/themeContext';
import { BsBank2 } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
const Sectors = () => {
	const { theme } = useTheme();
	const styles = theme === 'dark' ? stylesLight : stylesDark;
	return (
		<React.Fragment>
			<h2
				className={`text-center text-2xl mt-20 my-14 font-bold commonTextGradient1 ${styles.commonTextGradient}`}
			>
				Business Sector's We Serve
			</h2>
			<div className='grid lg:grid-cols-6 gap-4 mx-auto lg:w-[1200px]'>
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#ffd4ee] p-5 styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<BsBank2 className='text-4xl font-bold p-1' />
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Finance &amp; Banking </span>
							</h3>
						</div>
					</div>
				</div>
				{/* 2 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d3fee8] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<MdShoppingCart className='text-4xl font-bold p-1' />
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>E-commerce </span>
							</h3>
						</div>
					</div>
				</div>
				{/* 3 */}
				{/* <div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d9d3ff] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<MdOutlinePhoneAndroid className='text-4xl font-bold p-1' />
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Telecom </span>
							</h3>
						</div>
					</div>
				</div> */}
				{/* 4 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#c5e8ff] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 32 32'
									fill='none'
								>
									<path
										d='M27.9999 29.3334V9.97989C27.9999 8.51653 27.9999 7.78485 27.5793 7.16737C27.1585 6.54989 26.3834 6.14402 24.8334 5.3323L22.8611 4.2995C20.4278 3.02526 19.2111 2.38815 18.2722 2.78285C17.3333 3.17755 17.3333 4.32614 17.3333 6.6233V12'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linejoin='round'
									></path>
									<path
										d='M29.3334 29.3333H2.66675'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M27.9999 10.6667H25.3333M27.9999 14.6667H25.3333M27.9999 18.6667H25.3333'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M10.6667 17.3333C10.6667 14.8192 10.6667 13.5621 11.4478 12.7811C12.2288 12 13.4859 12 16.0001 12C18.5142 12 19.7713 12 20.5523 12.7811C21.3334 13.5621 21.3334 14.8192 21.3334 17.3333V29.3333H10.6667V17.3333Z'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linejoin='round'
									></path>
									<path
										d='M15.3333 17.3333H16.6666M15.3333 21.3333H16.6666'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
									></path>
									<path
										d='M4.66675 21.3333C5.77132 21.3333 6.66675 20.1394 6.66675 18.6667C6.66675 17.1939 5.77132 16 4.66675 16C3.56218 16 2.66675 17.1939 2.66675 18.6667C2.66675 20.1394 3.56218 21.3333 4.66675 21.3333Z'
										stroke='#0C0A25'
										stroke-width='1.5'
									></path>
									<path
										d='M4.66675 21.3333V29.3333'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Real Estate </span>
							</h3>
						</div>
					</div>
				</div>
				{/* 5 */}
				{/* <div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#ffeecf] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 32 32'
									fill='none'
								>
									<path
										d='M3.33325 16C3.33325 10.0289 3.33325 7.0433 5.18824 5.1883C7.04324 3.33331 10.0288 3.33331 15.9999 3.33331C21.971 3.33331 24.9566 3.33331 26.8117 5.1883C28.6666 7.0433 28.6666 10.0289 28.6666 16C28.6666 21.971 28.6666 24.9566 26.8117 26.8117C24.9566 28.6666 21.971 28.6666 15.9999 28.6666C10.0288 28.6666 7.04324 28.6666 5.18824 26.8117C3.33325 24.9566 3.33325 21.971 3.33325 16Z'
										stroke='#0C0A25'
										stroke-width='1.5'
									></path>
									<path
										d='M3.33325 12H28.6666'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linejoin='round'
									></path>
									<path
										d='M9.33301 8H9.34498'
										stroke='#0C0A25'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M14.6665 8H14.6785'
										stroke='#0C0A25'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M10.6667 17.3333L12.3021 18.7429C12.9897 19.3354 13.3334 19.6318 13.3334 20C13.3334 20.3681 12.9897 20.6645 12.3021 21.257L10.6667 22.6666'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M16 22.6667H21.3333'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Software </span>
							</h3>
						</div>
					</div>
				</div> */}
				{/* 6 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d3fee8] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 32 32'
									fill='none'
								>
									<path
										d='M25.9502 5.32468C22.3746 3.13145 19.2539 4.01529 17.3793 5.42316C16.6105 6.00043 16.2262 6.28905 16.0001 6.28905C15.7739 6.28905 15.3897 6.00043 14.6209 5.42316C12.7462 4.01529 9.62553 3.13145 6.05 5.32468C1.35751 8.20305 0.295706 17.6989 11.1195 25.7103C13.181 27.2363 14.2118 27.9992 16.0001 27.9992C17.7883 27.9992 18.8191 27.2363 20.8807 25.7103C31.7045 17.6989 30.6426 8.20305 25.9502 5.32468Z'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
									></path>
									<path
										d='M16 12V20M12 16H20'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Health &amp; Fitness </span>
							</h3>
						</div>
					</div>
				</div>
				{/* 7 */}
				{/* <div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d9d3ff] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 32 32'
									fill='none'
								>
									<path
										d='M3.33325 16L5.99992 17.3333'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M28.6667 16.6667L26 17.3334'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M10.6667 23.3333L10.9943 22.5144C11.4814 21.2967 11.725 20.6877 12.2329 20.3439C12.7408 20 13.3966 20 14.7082 20H17.2919C18.6035 20 19.2594 20 19.7673 20.3439C20.2751 20.6877 20.5187 21.2967 21.0058 22.5144L21.3334 23.3333'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M2.66675 22.6667V26.5094C2.66675 27.0143 2.98775 27.476 3.49592 27.7019C3.82565 27.8484 4.14059 28 4.52085 28H6.81264C7.19291 28 7.50784 27.8484 7.83757 27.7019C8.34575 27.476 8.66675 27.0143 8.66675 26.5094V24'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M23.3333 24V26.5094C23.3333 27.0143 23.6543 27.476 24.1625 27.7019C24.4922 27.8484 24.8071 28 25.1874 28H27.4791C27.8594 28 28.1743 27.8484 28.5041 27.7019C29.0122 27.476 29.3333 27.0143 29.3333 26.5094V22.6667'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M26.6667 11.3334L28.0001 10.6667'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M5.33333 11.3334L4 10.6667'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M6 12L7.45107 7.64679C8.03776 5.88673 8.33109 5.00671 9.02947 4.50336C9.72783 4 10.6555 4 12.5107 4H19.4893C21.3445 4 22.2721 4 22.9705 4.50336C23.6689 5.00671 23.9623 5.88673 24.5489 7.64679L26 12'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linejoin='round'
									></path>
									<path
										d='M6.00008 12H26.0001C27.2763 13.3513 29.3334 15.2332 29.3334 17.3328V21.9603C29.3334 22.7209 28.8274 23.3611 28.1558 23.45L24.0001 24H8.00008L3.84429 23.45C3.17281 23.3611 2.66675 22.7209 2.66675 21.9603V17.3328C2.66675 15.2332 4.7238 13.3513 6.00008 12Z'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linejoin='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 class='text-slate-800 dark:text-white font-bold'>
								<span>Automotive </span>
							</h3>
						</div>
					</div>
				</div> */}
				{/* 8 */}
				{/* <div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#c5e8ff] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 32 32'
									fill='none'
								>
									<path
										d='M8 23.966C8.1716 25.7105 8.55941 26.8848 9.43588 27.7612C11.0079 29.3333 13.5381 29.3333 18.5985 29.3333C23.6589 29.3333 26.1892 29.3333 27.7612 27.7612C29.3333 26.1892 29.3333 23.6589 29.3333 18.5985C29.3333 13.5381 29.3333 11.0079 27.7612 9.43588C26.8848 8.55941 25.7105 8.1716 23.966 8'
										stroke='#0C0A25'
										stroke-width='1.5'
									></path>
									<path
										d='M2.66675 13.3334C2.66675 8.30503 2.66675 5.79089 4.22884 4.22878C5.79095 2.66669 8.30509 2.66669 13.3334 2.66669C18.3617 2.66669 20.8759 2.66669 22.4379 4.22878C24.0001 5.79089 24.0001 8.30503 24.0001 13.3334C24.0001 18.3616 24.0001 20.8759 22.4379 22.4379C20.8759 24 18.3617 24 13.3334 24C8.30509 24 5.79095 24 4.22884 22.4379C2.66675 20.8759 2.66675 18.3616 2.66675 13.3334Z'
										stroke='#0C0A25'
										stroke-width='1.5'
									></path>
									<path
										d='M2.66675 14.8247C3.49211 14.7197 4.32653 14.668 5.16236 14.6697C8.69828 14.6044 12.1476 15.5684 14.8949 17.3899C17.4427 19.0792 19.233 21.404 20.0001 24'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linejoin='round'
									></path>
									<path
										d='M17.333 9.33331H17.345'
										stroke='#0C0A25'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 class='text-slate-800 dark:text-white font-bold'>
								<span>Photo &amp; Video </span>
							</h3>
						</div>
					</div>
				</div> */}
				{/* 9 */}
				{/* <div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#ffeecf] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 32 32'
									fill='none'
								>
									<path
										d='M13.3333 17.7777C13.3333 17.3644 13.3333 17.1577 13.3787 16.9883C13.5019 16.5281 13.8614 16.1687 14.3215 16.0455C14.491 16 14.6977 16 15.111 16H16.8889C17.3022 16 17.5089 16 17.6783 16.0455C18.1385 16.1687 18.4979 16.5281 18.6211 16.9883C18.6666 17.1577 18.6666 17.3644 18.6666 17.7777V18.6667C18.6666 20.1395 17.4727 21.3333 15.9999 21.3333C14.5271 21.3333 13.3333 20.1395 13.3333 18.6667V17.7777Z'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M18.5332 18H20.11C21.8223 18 22.6784 18 23.4074 17.8456C25.5172 17.3987 27.2386 16.0276 27.9918 14.194C28.252 13.5606 28.3582 12.794 28.5706 11.261C28.6503 10.6854 28.6902 10.3977 28.6519 10.1623C28.5402 9.47674 27.9908 8.91519 27.2507 8.73021C26.9966 8.66669 26.6752 8.66669 26.0324 8.66669H5.96741C5.32459 8.66669 5.00318 8.66669 4.74907 8.73021C4.00901 8.91519 3.45961 9.47674 3.34797 10.1623C3.30963 10.3977 3.3495 10.6854 3.42922 11.261C3.64162 12.794 3.74781 13.5606 4.00803 14.194C4.76125 16.0276 6.48255 17.3987 8.59239 17.8456C9.32131 18 10.1775 18 11.8898 18H13.4666'
										stroke='#0C0A25'
										stroke-width='1.5'
									></path>
									<path
										d='M4.66675 15.3333V18C4.66675 23.0282 4.66675 25.5425 6.14207 27.1045C7.61737 28.6666 9.99185 28.6666 14.7409 28.6666H17.2593C22.0083 28.6666 24.3827 28.6666 25.8581 27.1045C27.3334 25.5425 27.3334 23.0282 27.3334 18V15.3333'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M20.6666 8.66665L20.5635 8.1957C20.0502 5.84895 19.7935 4.67559 19.1825 4.00445C18.5714 3.33331 17.7598 3.33331 16.1363 3.33331H15.8635C14.2401 3.33331 13.4285 3.33331 12.8174 4.00445C12.2063 4.67559 11.9496 5.84895 11.4363 8.1957L11.3333 8.66665'
										stroke='#0C0A25'
										stroke-width='1.5'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Business </span>
							</h3>
						</div>
					</div>
				</div> */}
				{/* 10 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d9d3ff] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 32 32'
									fill='none'
								>
									<path
										d='M8.80005 15.8973C15.5635 3.29159 23.9854 3.14623 27.3509 4.64927C28.8539 8.01474 28.7084 16.4365 16.1028 23.2C15.972 22.4485 15.2451 20.4799 13.3826 18.6175C11.5202 16.7551 9.55157 16.028 8.80005 15.8973Z'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M17.8 22.6C20.2514 23.8 20.5131 25.9517 20.8527 28C20.8527 28 25.9868 24.2047 22.7027 19'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M9.39995 14.3025C8.19995 11.8512 6.0482 11.5895 4 11.2499C4 11.2499 7.79533 6.11574 13 9.39988'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M8.02408 19.882C7.34164 20.5644 6.18148 22.5435 7.00042 25.0004C9.45722 25.8194 11.4363 24.6591 12.1188 23.9767'
										stroke='#0C0A25'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M23.0678 11.2669C23.0678 9.97826 22.0231 8.93359 20.7345 8.93359C19.4458 8.93359 18.4011 9.97826 18.4011 11.2669C18.4011 12.5556 19.4458 13.6003 20.7345 13.6003C22.0231 13.6003 23.0678 12.5556 23.0678 11.2669Z'
										stroke='#0C0A25'
										stroke-width='1.5'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Startup </span>
							</h3>
						</div>
					</div>
				</div>
				{/* 11 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d3fee8] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M10 11.6273L5.07498 17.4215C4.41411 18.199 3.23201 18.2464 2.51138 17.5241C1.79074 16.8019 1.83795 15.6172 2.61376 14.9549L8.3953 10.019'
										stroke='black'
										stroke-width='1.5'
										stroke-linejoin='round'
									></path>
									<path
										d='M18 10.0667L13.0476 15.03M9.95238 2.00146L5 6.96472M9.33337 2.62183L5.61908 6.34428C5.61908 6.34428 7.47622 8.82592 9.33337 10.6871C11.1905 12.5484 13.6667 14.4096 13.6667 14.4096L17.381 10.6871C17.381 10.6871 15.5238 8.2055 13.6667 6.34428C11.8096 4.48306 9.33337 2.62183 9.33337 2.62183Z'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M20 11.659L22 10.019M20 14.9389L22 16.0322'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M11.002 21.9987H20.9998M12.2267 21.9987C12.7782 21.0113 13.19 19.1216 15.142 19.0157C15.7218 18.9843 16.3117 18.9843 16.8914 19.0157C18.8434 19.1216 19.2572 21.0113 19.8087 21.9987'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 class='text-slate-800 dark:text-white font-bold'>
								<span>Legal Services </span>
							</h3>
						</div>
					</div>
				</div>
				{/* 12 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d3fee8] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									d='M19.4173 15.7133C23.368 10.7038 22.3007 5.73508 19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801L11.9998 4.84158M19.4173 15.7133C18.469 16.9156 17.2317 18.1204 15.6605 19.2834C14.1143 20.4278 13.3412 21 12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221719 13.2749 1.01807 6.15293 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801L11.9998 4.84158M19.4173 15.7133L13.8921 9.44479C13.6659 9.1882 13.2873 9.13296 12.9972 9.31424L10.8111 10.6806C10.0418 11.1614 9.04334 11.0532 8.3949 10.4187C7.53837 9.58062 7.62479 8.17769 8.5777 7.45106L11.9998 4.84158'
									stroke='black'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								></path>
							</svg>{' '}
						</span>
					</div>

					<div>
						<h3 class='text-slate-800 dark:text-white font-bold'>
							<span>Non-profit </span>
						</h3>
					</div>
				</div>
				{/* 13 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d3fee8] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M12 2H6C3.518 2 3 2.518 3 5V22H15V5C15 2.518 14.482 2 12 2Z'
										stroke='black'
										stroke-width='1.5'
										stroke-linejoin='round'
									></path>
									<path
										d='M18 8H15V22H21V11C21 8.518 20.482 8 18 8Z'
										stroke='black'
										stroke-width='1.5'
										stroke-linejoin='round'
									></path>
									<path
										d='M8 6H10M8 9H10M8 12H10'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M11.5 22V18C11.5 17.0572 11.5 16.5858 11.2071 16.2929C10.9142 16 10.4428 16 9.5 16H8.5C7.55719 16 7.08579 16 6.79289 16.2929C6.5 16.5858 6.5 17.0572 6.5 18V22'
										stroke='black'
										stroke-width='1.5'
										stroke-linejoin='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 class='text-slate-800 dark:text-white font-bold'>
								<span>Govt. &amp; Public Sector </span>
							</h3>
						</div>
					</div>
				</div>
				{/* 14 */}
				{/* <div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d3fee8] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M18 3V8M6 3V8'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M20.5 4V5.5M20.5 5.5V7M20.5 5.5H22M3.5 4V5.5M3.5 5.5V7M3.5 5.5H2'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M18 5.5H6'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M7.27653 19H16.7235C17.961 19 18.5797 19 18.8356 18.6974C19.4163 18.0107 18.3038 17.1031 17.8979 16.6456C17.4405 16.1302 17.1059 16 16.4299 16H7.57013C6.89408 16 6.55953 16.1302 6.10214 16.6456C5.69617 17.1031 4.58375 18.0107 5.16444 18.6974C5.42026 19 6.03902 19 7.27653 19Z'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M9 8V16M15 8V16'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M16 19V21M8 19V21'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Sports &amp; Fitness </span>
							</h3>
						</div>
					</div>
				</div> */}
				{/* 15 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#ffd4ee] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M15 4L12 6L9 4C8.41425 4.50941 7.07071 5.29343 7.00348 6.14565C6.97434 6.51512 7.12883 6.71716 7.43782 7.12122C8.11164 8.00239 9 8.52009 9 10H15C15 8.52009 15.8884 8.00239 16.5622 7.12122C16.8712 6.71716 17.0257 6.51512 16.9965 6.14565C16.9293 5.29343 15.5858 4.50941 15 4Z'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M9 4V2'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M15 4V2'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M9.5 10H14.5'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M18 19C20 19 21 16.8272 21 16.8272C18.1754 14.9906 16.4999 12.8338 15.5872 11.2048C15.2397 10.5845 15.066 10.2744 14.8318 10.1372C14.5977 10 14.2846 10 13.6586 10H10.3414C9.71537 10 9.40234 10 9.16817 10.1372C8.93401 10.2744 8.76026 10.5845 8.41278 11.2048C7.50006 12.8338 5.82461 14.9906 3 16.8272C3 16.8272 4 19 6 19'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M13.7055 14C14.0451 14.7964 15.5206 16.6712 17.1412 18.3109C17.7382 18.9149 18.0367 19.2169 17.9964 19.7296C17.956 20.2423 17.7063 20.4131 17.2067 20.7546C16.0705 21.5314 14.335 22 12 22C9.66504 22 7.92947 21.5314 6.79328 20.7546C6.29373 20.4131 6.04395 20.2423 6.00361 19.7296C5.96327 19.2169 6.26178 18.9149 6.85882 18.3109C8.4794 16.6712 9.95491 14.7964 10.2945 14'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Fashion &amp; Apparel </span>
							</h3>
						</div>
					</div>
				</div>
				{/* 16 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d9d3ff] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M6.19351 11.3965L12.192 3.31186C12.6611 2.67957 13.5405 3.07311 13.5405 3.91536V10.1729C13.5405 10.6775 13.8853 11.0865 14.3107 11.0865H17.2283C17.891 11.0865 18.2443 12.0134 17.8065 12.6035L11.808 20.6881C11.3389 21.3204 10.4595 20.9269 10.4595 20.0846V13.8271C10.4595 13.3225 10.1147 12.9135 9.68931 12.9135H6.77173C6.10895 12.9135 5.75566 11.9866 6.19351 11.3965Z'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Energy &amp; Utilities </span>
							</h3>
						</div>
					</div>
				</div>
				{/* 17 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#ffd4ee] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M3.88481 20.1321C5.98804 22.2096 9.86304 21.7503 12.5399 19.1062C15.5988 16.0847 17.1823 15.1788 18.2931 14.5591C18.5175 14.434 18.5733 14.1229 18.3912 13.9429C14.7824 10.3783 8.75783 13.0463 8.10703 17.75M3.88481 20.1321L2.5 21.5M3.88481 20.1321C1.78158 18.0546 2.24717 14.2277 4.92401 11.5836C5.77111 10.956 7.39551 9.17678 7.65754 6.77425C7.68407 6.53098 7.99311 6.40789 8.16826 6.5809C9.47265 7.86934 10.1241 9.55848 10.1227 11.2472'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
									<path
										d='M17.5917 13C19.9418 9.37568 22.5321 4.72423 21.0791 3.04556C19.3481 1.04574 14.0084 4.93844 10 8.33662'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									></path>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Agriculture </span>
							</h3>
						</div>
					</div>
				</div>
				{/* 18 */}
				<div className='rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] bg-[#d9d3ff] p-5 flex justify-center items-center text-center styleCenter hover:scale-110 hover:ease-in-out duration-300 dark:bg-blue-950'>
					<div className='flex flex-col justify-center items-center text-center '>
						<div>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='28'
									height='25'
									viewBox='0 0 28 25'
									fill='none'
								>
									<g id='Group 28'>
										<g id='Group'>
											<g id='Group_2'>
												<path
													id='Vector'
													d='M18.6696 11.7457C18.6677 11.7457 18.6659 11.7457 18.6641 11.7457H16.4309V9.50701C16.4339 9.0555 16.0703 8.68698 15.6188 8.68396C15.617 8.68396 15.6151 8.68396 15.6133 8.68396H12.387C11.9355 8.68396 11.5694 9.05001 11.5694 9.50152V11.7402H9.33623C8.88472 11.7372 8.5162 12.1007 8.51318 12.5522C8.51318 12.5559 8.51318 12.5595 8.51318 12.5632V15.7841C8.51318 16.2356 8.87923 16.6017 9.33074 16.6017H11.5694V18.8349C11.5664 19.2864 11.93 19.6549 12.3815 19.6579C12.3833 19.6579 12.3852 19.6579 12.387 19.6579H15.6078C16.0593 19.6579 16.4254 19.2918 16.4254 18.8403V16.6017H18.6641C19.1156 16.6047 19.4841 16.2411 19.4871 15.7896C19.4871 15.7877 19.4871 15.7859 19.4871 15.7841V12.5632C19.4871 12.1117 19.1211 11.7457 18.6696 11.7457ZM18.3897 15.5043H15.8822C15.5792 15.5043 15.3335 15.7499 15.3335 16.053V18.5605H12.6668V16.053C12.6668 15.7499 12.4211 15.5043 12.1181 15.5043H9.61058V12.8431H12.1181C12.4211 12.8431 12.6668 12.5974 12.6668 12.2944V9.78135H15.328V12.2889C15.328 12.5919 15.5737 12.8376 15.8767 12.8376H18.3897V15.5043Z'
													fill='#0C0A25'
													stroke='#0C0A25'
													stroke-width='0.5'
												></path>
											</g>
										</g>
										<g id='Group_3'>
											<g id='Group_4'>
												<path
													id='Vector_2'
													d='M23.5474 4.5797H19.0261V2.64829C19.0546 1.76695 18.3632 1.02936 17.4818 1.0009C17.4369 0.999459 17.392 0.99987 17.3471 1.0022H10.653C9.77237 0.956317 9.02128 1.633 8.97532 2.51359C8.97299 2.55844 8.97251 2.60337 8.97402 2.64829V4.56873H4.45276C2.7079 4.56873 0.666748 5.56187 0.666748 8.35474V20.2889C0.666748 23.0818 2.7079 24.0749 4.45276 24.0749H23.5474C25.2923 24.0749 27.3334 23.0818 27.3334 20.2889V8.36571C27.3334 5.57285 25.2978 4.5797 23.5474 4.5797ZM10.0714 2.64829C10.0714 2.48917 10.0714 2.06119 10.6585 2.06119H17.3471C17.9342 2.06119 17.9342 2.48368 17.9342 2.64829V4.56873H10.0714V2.64829ZM26.236 20.2889C26.236 22.7141 24.3595 22.9775 23.5474 22.9775H4.45276C3.64617 22.9775 1.76414 22.7141 1.76414 20.2889V8.36571C1.76414 5.94047 3.64069 5.6771 4.45276 5.6771H23.5474C24.354 5.6771 26.236 5.94047 26.236 8.36571V20.2889Z'
													fill='#0C0A25'
													stroke='#0C0A25'
													stroke-width='0.5'
												></path>
											</g>
										</g>
									</g>
								</svg>{' '}
							</span>
						</div>

						<div>
							<h3 className='text-slate-800 dark:text-white font-bold'>
								<span>Logistics </span>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Sectors;
