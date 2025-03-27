import City from './City'

function CitiesList({ cities }) {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
			{
				cities.map(city => {
					return <City city={city} key={city.name} />
				})
			}
		</div>

	)
}

export default CitiesList