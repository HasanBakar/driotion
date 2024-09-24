'use client';
import React from 'react';
import { MdLightMode, MdModeNight } from 'react-icons/md';
import { useTheme } from '../../../context/theme/themeContext';

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme();

	// Function to return the correct icon based on the current theme
	const getIcon = () => {
		return theme === 'light' ? (
			<MdModeNight className='text-2xl font-semibold transition-transform duration-500 ease-in-out transform hover:scale-110' />
		) : (
			<MdLightMode className='text-2xl font-semibold transition-transform duration-500 ease-in-out transform hover:scale-110' />
		);
	};

	return (
		<button
			onClick={toggleTheme}
			className='btn bg-[#222f3e] text-white w-14 p-1 rounded-2xl flex justify-center items-center'
		>
			{getIcon()}
		</button>
	);
};

export default ThemeToggleButton;
