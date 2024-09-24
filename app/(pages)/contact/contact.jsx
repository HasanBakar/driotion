'use client';
import React from 'react';
import peep from '@/public/asset/peep6.svg';
import Image from 'next/image';
import './style.css';
import toast, { Toaster } from 'react-hot-toast';
import ContactUsSendEmailForEnquiryToCompanyButton from '../../components/common/buttons/contactUsSendEmailForEnquiryToCompanyButton';
import { sendEmailForEnquiry } from '../../config/config';
import stylesLight from '../../styles/light.module.css';
import stylesDark from '../../styles/dark.module.css';
import { useTheme } from '../../context/theme/themeContext';
const Contact = () => {
	const { theme } = useTheme();
	const styles = theme === 'dark' ? stylesLight : stylesDark;
	const sendMail = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const phone = form.phone.value;
		const message = form.message.value;
		console.log(name, email, phone, message);

		fetch(`${sendEmailForEnquiry}/api/sendMail`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name,
				email,
				phone,
				message,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					form.reset();
					toast.success(
						'You Message have been Successfully Sent,We Will be touch with you soon.'
					);
				}
			})
			.catch((err) => {
				console.log(err);
				return;
			});
	};
	return (
		<React.Fragment>
			<div
				className={`hero min-h-screen  ${styles.contactUsBackground} overflow-x-hidden`}
			>
				<div className='hero-content flex-col lg:flex-row'>
					<div className='text-center  lg:text-left  lg:visible'>
						<Image
							src={peep}
							alt='driotion'
							width={400}
							height={400}
							className='contactBabu'
						/>
					</div>
					<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form
							onSubmit={sendMail}
							className={`card-body ${styles.contactUsForm}`}
						>
							<h1 className='text-5xl font-bold commonTextGradient'>
								Get In Touch
							</h1>
							<div className='form-control'>
								<label className='label'>
									<span
										className={`label-text font-bold ${styles.contactUsLabel}`}
									>
										Name
									</span>
								</label>
								<input
									type='text'
									placeholder='Name'
									className='input input-bordered font-bold'
									required
									name='name'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span
										className={`label-text font-bold ${styles.contactUsLabel}`}
									>
										Email
									</span>
								</label>
								<input
									type='email'
									placeholder='email'
									className='input input-bordered font-bold'
									required
									name='email'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span
										className={`label-text font-bold ${styles.contactUsLabel}`}
									>
										Phone
									</span>
								</label>
								<input
									type='number'
									placeholder='Mobile/Phone Number'
									className='input input-bordered font-bold'
									required
									name='phone'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span
										className={`label-text font-bold ${styles.contactUsLabel}`}
									>
										Your Enquiry
									</span>
								</label>
								<textarea
									type='text'
									placeholder='Your message'
									className='textarea textarea-bordered font-bold'
									required
									name='message'
								/>
							</div>
							<div className='form-control mt-6'>
								<ContactUsSendEmailForEnquiryToCompanyButton />
							</div>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
