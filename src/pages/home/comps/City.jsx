import BackendUri from '../../../utilities/enums/backendUri'

function City({ city }) {
	return (
		<div style={{ backgroundImage: `url('${BackendUri.base}${city.image}')` }} className='h-80 w-full bg-no-repeat bg-cover bg-center rounded-xl relative'>
			<div className='absolute bottom-8 left-7 text-white font-extrabold text-4xl'>
				<p>{city.name}</p>
				<p>{city.subText}</p>
			</div>
		</div>
	)
}

export default City

