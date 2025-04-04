import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

import Fallback from '../../components/Fallback';
import Banner from './comps/Banner';
import Contact from '../../components/Contact';

import BackendURI from '../../utilities/enums/backendUri';

import TypesList from './comps/TypesList';
import CitiesList from './comps/CitiesList';
import HotelsList from './comps/HotelsList';



const Home = () => {

	return (
		<div>
			<Banner />
			<HomeContents />
			<Contact />
		</div >
	);
}

export default Home;


function HomeContents() {
	const { cities, types, hotels } = useLoaderData()
	return (
		<div className='container mx-auto my-16 px-3 flex flex-col gap-7'>
			<Suspense fallback={<Fallback />}>
				<Await resolve={cities}>
					{cties =>
						<CitiesList cities={cties} />
					}
				</Await>
			</Suspense>

			<Suspense fallback={<Fallback />}>
				<Await resolve={types}>
					{types =>
						<TypesList types={types} />
					}
				</Await>
			</Suspense>

			<Suspense fallback={<Fallback />}>
				<Await resolve={hotels}>
					{hotels =>
						<HotelsList hList={hotels} />
					}
				</Await>
			</Suspense>
		</div>
	)
}

export async function loader() {
	const cities = fetch(BackendURI.cities).then(res => res.json()).catch(err => console.log(err)).then(json => json || [])
	const types = fetch(BackendURI.types).then(res => res.json()).catch(err => console.log(err)).then(json => json || [])
	const hotels = fetch(BackendURI.hotels).then(res => res.json()).catch(err => console.log(err)).then(json => json || [])

	// alter deffer, in react-router-dom v6, return a promise, hear is response.json()
	return {
		cities: cities,
		types: types,
		hotels: hotels
	}
}


