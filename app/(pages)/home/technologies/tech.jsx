'use client';
import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { TbBrandReactNative, TbBrandPython } from 'react-icons/tb';
import { RiNextjsFill, RiFlutterFill, RiJavaFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoPython } from 'react-icons/io5';
import stylesLight from '../../../styles/light.module.css';
import stylesDark from '../../../styles/dark.module.css';
import { useTheme } from '../../../context/theme/themeContext';
const Tech = () => {
	const { theme } = useTheme();
	const styles = theme === 'dark' ? stylesLight : stylesDark;

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);
	return (
		<React.Fragment>
			<div
				className={`lg:w-[1200px] bg-base-200 mx-auto  p-4 rounded-md ${styles.techBackground}`}
			>
				<Marquee pauseOnHover={true}>
					<div>
						<h1>DRIOTION</h1>
					</div>
					{/* <div className={`flex justify-between items-center gap-2 `}>
            <div>
              <FaReact className="text-3xl text-[#003366]" />
            </div>
            <div>
              <h2 className="text-xl font-bold commonTextGradient">React-JS</h2>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 ml-4">
            <div>
              <FaNodeJs className="text-3xl text-[#215732]" />
            </div>
            <div>
              <h2 className="text-xl font-bold commonTextGradient">Node-JS</h2>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 ml-4">
            <div>
              <TbBrandReactNative className="text-3xl text-[#003366]" />
            </div>
            <div>
              <h2 className="text-xl font-bold commonTextGradient">
                React-Native
              </h2>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 ml-4">
            <div>
              <RiNextjsFill className="text-3xl text-[#344767]" />
            </div>
            <div>
              <h2 className="text-xl font-bold commonTextGradient">Next-JS</h2>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 ml-4">
            <div>
              <SiMongodb className="text-3xl text-[#4db33d]" />
            </div>
            <div>
              <h2 className="text-xl font-bold commonTextGradient">MongoDB</h2>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 ml-4">
            <div>
              <BiLogoPostgresql className="text-3xl " />
            </div>
            <div>
              <h2 className="text-xl font-bold commonTextGradient">
                PostgreSQL
              </h2>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 ml-4">
            <div>
              <RiFlutterFill className="text-3xl " />
            </div>
            <div>
              <h2 className="text-xl font-bold commonTextGradient">Flutter</h2>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 ml-4">
            <div>
              <FaLaravel className="text-3xl text-[#fb503b]" />
            </div>
            <div>
              <h2 className="text-xl font-bold commonTextGradient">Laravel</h2>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 ml-4 mr-4">
            <div>
              <IoLogoPython className="text-3xl " />
            </div>
            <div>
              <h2 className="text-xl font-bold commonTextGradient">Python</h2>
            </div>
          </div> */}
				</Marquee>
			</div>
		</React.Fragment>
	);
};

export default Tech;
