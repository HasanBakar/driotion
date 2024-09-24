import React from 'react';
import { Ubuntu } from 'next/font/google';
import './styles/globals.css';
import { ThemeProvider } from './context/theme/themeContext';
// import ThemeToggleButton from "./Components/Common/Buttons/ThemeToggleButton";
import Header from './components/layouts/header/header';
import Footer from './components/layouts/footer/footer';

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});

type Props = {
	children: React.ReactNode;
};

const RootLayout: React.FC<Props> = async ({ children }) => {
	// bg-[url('/asset/bgImage-White.png')] dark:bg-[url('/asset/bgImage-Dark.png')]
	return (
		<html>
			<body
				className={`${ubuntu.className}  bg-blue-50 dark:bg-[#001533] `}
			>
				<ThemeProvider>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
