import Image from 'next/image';
import notFound from '@/public/asset/peep1.svg';
import NotFoundButton from './components/common/buttons/notFoundButton';

export default function NotFound() {
	return (
		<div>
			<NotFoundButton />
			<div className='animate-glow animate-glow2 text-4xl text-center font-bold commonTextGradient'>
				Your Requested Resources Not Found
			</div>
			<Image
				src={notFound}
				className=' mx-auto lg:w-[300px] lg:h-[300px]'
			/>
		</div>
	);
}
