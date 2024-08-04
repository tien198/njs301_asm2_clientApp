import item from '../../../data/detail.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

const Detail = () => {
  return (
    <div className='container mx-auto mt-6 px-5 md:px-7'>
      <GeneralInfo item={item} key={1} />
      <ImgGallery photos={item.photos} />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
        <div className='col-start-1 col-end-4 flex flex-col gap-5'>
          <p className='text-2xl font-bold'>{item.title}</p>
          <span className='text-sm'>{item.description}</span>
        </div>
        <div className='bg-blue-100 pt-4 px-3 pb-3 flex flex-col gap-4'>
          <p className='text-gray-600 text-lg font-bold'>Perpect for a 9-night stay!</p>
          <p className='text-sm'>Located in the real heart of Krakow, this property has excellent location srore of 9.8!</p>
          <p className='text-2xl font-extralight'><span className='font-bold'>${item.nine_night_price}</span> (9 nights)</p>
          <Button label='Reserve or Book Now!' className='bg-blue-600 text-white rounded py-2 px-5 text-sm font-bold' />

        </div>
      </div>
    </div>
  );
};

export default Detail;

function GeneralInfo({ item }) {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col gap-4'>
        <strong className='text-2xl'>{item.name}</strong>
        <span className='text-sm flex gap-4'><FontAwesomeIcon icon={faLocationDot} /> {item.address}</span>
        <span className='text-blue-600'>{item.distance}</span>
        <span className='text-green-600'>{item.price}</span>
      </div>
      <div>
        <Button label='Reserve or Book Now!' className='bg-blue-600 text-white rounded py-2 px-5 text-sm font-bold' />
      </div>
    </div>
  )
}

function ImgGallery({ photos }) {
  return (
    <div className='grid grid-cols-3 gap-1 my-4'>
      {
        photos.map(p => {
          return <img src={'.' + p} alt={item.name} key={p} />
        })
      }
    </div>
  )
}