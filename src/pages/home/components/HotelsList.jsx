import Hotel from './Hotel';

function HotelList({ hList }) {
	return (
		<div className='flex flex-col gap-7'>
			<h4 className='font-extrabold text-2xl'>Home guest love</h4>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
				{/* items */}
				{
					hList.map(h => {
						return <Hotel hotel={h} key={h.name} />
					})
				}
			</div>
		</div>
	)
}

export default HotelList;
