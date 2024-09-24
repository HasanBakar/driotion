import LoadingSkeleton from './components/extra/loadingSkeleton';

export default function Loading() {
	return (
		<div className='lg:w-[300px] mx-auto my-8'>
			{/* <span className="loading loading-dots"></span> */}
			<LoadingSkeleton />
		</div>
	);
}
