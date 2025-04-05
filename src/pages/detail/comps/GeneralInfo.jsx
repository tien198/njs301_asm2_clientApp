import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button';


export default function GeneralInfo({ item }) {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col gap-4'>
        <strong className='text-2xl'>{item.name}</strong>
        <span className='text-sm flex gap-4'><FontAwesomeIcon icon={faLocationDot} /> {item.address}</span>
        <span className='text-blue-600'>{item.distance}</span>
        <span className='text-green-600'>{item.cheapestPrice} $</span>
      </div>
      <div>
        <Button className='bg-blue-600 text-white rounded py-2 px-5 text-sm font-bold'>
          Reserve or Book Now!
        </Button>
      </div>
    </div>
  )
}