import BackendUri from '../../../utilities/backendUri';

function Type({ type }) {
    return (
        <div className=' text-xl'>
            <div style={{ backgroundImage: `url('${BackendUri.base + type.image}')` }} className='mb-4 w-full h-32 lg:h-72 bg-cover rounded-xl'></div>
            <div className='font-semibold'>{type.name}</div>
            <div className='font-light'>{type.count} hotels</div>
        </div>
    )
}

export default Type;