'use client';
import React from 'react';
import Link from 'next/link';

import stylesLight from '../../../styles/light.module.css';
import stylesDark from '../../../styles/dark.module.css';
// import LanguageSwitcher from "../../Extra/LanguageSwitcher";
import ThemeToggleButton from '../../common/buttons/themeToggleButton';
import { useTheme } from '../../../context/theme/themeContext';
// import { logo } from "../../../../../public/asset/logoTextWhiteMode.png";
import Image from 'next/image';
export default function Header() {
	const { theme } = useTheme();
	const styles = theme === 'dark' ? stylesLight : stylesDark;

	return (
		<React.Fragment>
			<div className='navbar absolute z-10'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<div
							tabIndex={0}
							role='button'
							className='btn btn-ghost lg:hidden'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-slate-300 rounded-box min-w-max '
						>
							{/* <li>
								<Link
									href={'/'}
									className={` dark:text-white text-blue-950  font-post-no-bills-regular mr-4 text-lg`}
								>
									{'Home'}
								</Link>
							</li> */}

							<li>
								<Link
									href={'/about'}
									className={` dark:text-white text-blue-950  font-post-no-bills-regular mr-4 text-lg`}
								>
									{'About us'}
								</Link>
							</li>
							<li>
								<Link
									href={'/services'}
									className='dark:text-white text-blue-950  font-post-no-bills-regular mr-4 text-lg'
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href={'/contact'}
									className={` dark:text-white text-blue-950  font-post-no-bills-regular mr-4 text-lg`}
								>
									{'Contact Us'}
								</Link>
							</li>

							{/* <li>
								<Link
									href={'/blog'}
									className='dark:text-white text-blue-950  font-post-no-bills-regular mr-4 text-lg'
								>
									Blog
								</Link>
							</li> */}
							<li>{/* <LanguageSwitcher /> */}</li>
						</ul>
					</div>

					<Link href='/'>
						<Image
							src={'/asset/logoText.png'}
							alt='driotion'
							// placeholder="blur"
							width={120}
							height={80}
							className='mx-10 hidden dark:block'
						/>
						<Image
							src={'/asset/logoTextWhiteMode.png'}
							alt='driotion'
							// placeholder="blur"
							width={120}
							height={80}
							className='mx-10 block dark:hidden'
						/>
					</Link>
					{/* <Link href={"/"} className={`navbarFont font-bold`}>
            Driotion
          </Link> */}
				</div>
				<div className='navbar-end hidden lg:flex'>
					<ul className='menu menu-horizontal px-1'>
						{/* <li>
							<Link
								href={'/'}
								className={`dark:text-white text-blue-950 font-post-no-bills-regular mr-4 text-xl`}
							>
								{'Home'}
							</Link>
						</li> */}

						<li>
							<Link
								href={'/about'}
								className={` dark:text-white text-blue-950 font-post-no-bills-regular mr-4 text-xl`}
							>
								{'About us'}
							</Link>
						</li>
						<li>
							<Link
								href={'/services'}
								className='dark:text-white text-blue-950 font-post-no-bills-regular mr-4 text-xl'
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								href={'/contact'}
								className={`dark:text-white text-blue-950 font-post-no-bills-regular mr-4 text-xl`}
							>
								{'Contact Us'}
							</Link>
						</li>

						{/* <li>
							<Link
								href={'/blog'}
								className='dark:text-white text-blue-950 font-post-no-bills-regular mr-4 text-xl'
							>
								Blog
							</Link>
						</li> */}
						<li>
							{/* <LanguageSwitcher /> */}
							{/* <ThemeToggleButton /> */}
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
}
