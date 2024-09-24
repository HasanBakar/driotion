import React from 'react';
import { useTheme } from '../context/theme/themeContext';
import ThemeToggleButton from './components/common/buttons/themeToggleButton';

const ThemeToggle = () => {
	return (
		<React.Fragment>
			<ThemeToggleButton />
		</React.Fragment>
	);
};

export default ThemeToggle;
