import { Link } from 'react-router-dom';
import Hotel from './Hotel';
import clientAppUri from '../../../utilities/enums/clientAppUri';
const { ClientApp_AbsoluteURI } = clientAppUri

function HotelList({ hList }) {
	return (
		<div className='flex flex-col gap-7'>
			<h4 className='font-extrabold text-2xl'>Home guest love</h4>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
				{/* items */}
				{
					hList.map(h =>
						<Link to={ClientApp_AbsoluteURI.detail + '/' + h._id} key={h._id}>
							<Hotel hotel={h} />
						</Link>
					)
				}
			</div>
		</div>
	)
}

export default HotelList;
