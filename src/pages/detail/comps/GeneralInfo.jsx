import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button';


export default function GeneralInfo({ item }) {
  return (
    <div className='flex justify-between my-20'>
      <div className='flex flex-col gap-4'>
        <h5><strong className='text-3xl font-bold'>{item.name}</strong></h5>
        <span className='text-sm flex gap-4'><FontAwesomeIcon icon={faLocationDot} /> {item.address}</span>
        <span className='font-semibold text-blue-600'>Exellent location - {item.distance}m from center</span>
        <span className='font-semibold text-green-600'>Book a stay over ${item.cheapestPrice} at this property and get the free airport taxi</span>
      </div>
      <div>
        <Button className='bg-blue-600 text-white rounded py-2 px-5 text-sm font-bold'>
          Reserve or Book Now!
        </Button>
      </div>
    </div>
  )
}