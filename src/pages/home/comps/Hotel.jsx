
function Hotel({ hotel }) {
    return (
        <div className=' text-xl'>
            <div style={{ backgroundImage: `url(${hotel.photos[0]})` }} className='mb-4 w-full h-56 lg:h-96 bg-cover bg-center'></div>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold underline text-violet-600'>{hotel.name}</p>
                <p className='font-light'>{hotel.type}</p>
                <p className='font-semibold'>Starting from ${hotel.cheapestPrice}</p>
                <p><span className='text-white bg-blue-800 p-1'>{hotel.rating}</span> {hotel.type}</p>
            </div>
        </div>
    )
}

export default Hotel;