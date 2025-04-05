import { useLoaderData } from 'react-router-dom';
import Button from '../../components/Button';
import GeneralInfo from './comps/GeneralInfo'
import ImgGallery from './comps/ImgGallery'
import BackendUri from '../../utilities/enums/backendUri';

const Detail = () => {
  const loader = useLoaderData()
  console.log(loader);

  return (
    <div className='container mx-auto mt-6 px-5 md:px-7'>
      <GeneralInfo item={loader} />
      <ImgGallery item={loader} />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
        <div className='col-start-1 col-end-4 flex flex-col gap-5'>
          <p className='text-2xl font-bold'>{loader.title}</p>
          <span className='text-sm'>{loader.description}</span>
        </div>
        <div className='bg-blue-100 pt-4 px-3 pb-3 flex flex-col gap-4'>
          <p className='text-gray-600 text-lg font-bold'>Perpect for a 9-night stay!</p>
          <p className='text-sm'>Located in the real heart of Krakow, this property has excellent location srore of 9.8!</p>
          <p className='text-2xl font-extralight'><span className='font-bold'>${loader.nine_night_price}</span> (9 nights)</p>
          <Button className='bg-blue-600 text-white rounded py-2 px-5 text-sm font-bold'>
            Reserve or Book Now!
          </Button>

        </div>
      </div>
    </div>
  );
};

export default Detail;



export async function loader({ params }) {
  const paramName = Object.keys(params)[0]

  try {
    const res = await fetch(BackendUri.hotelDetail + '/' + params[paramName])
    if (res.ok)
      return await res.json()
    return res
  } catch (err) { console.error(err) }
}