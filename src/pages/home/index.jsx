import Fallback from '../../components/Fallback';
import Header from '../../components/layouts/Header';
import Contact from '../../components/Contact';

import BackendURI from '../../utils/backendUri';

import CitiesList from './CityList';
import TypesBrowse from './TypesBrowse';
import HotelList from './HotelList';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';


const Home = () => {

	return (
		<div>
			<Header />
			<HomeContents />
			<Contact />
		</div >
	);
};

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
						<TypesBrowse types={types} />
					}
				</Await>
			</Suspense>

			<Suspense fallback={<Fallback />}>
				<Await resolve={hotels}>
					{hotels =>
						<HotelList hList={hotels} />
					}
				</Await>
			</Suspense>
		</div>
	)
}

export async function loader() {
	const cities = fetch(BackendURI.cities).then(res => res.json())
	const types = fetch(BackendURI.types).then(res => res.json())
	const hotels = fetch(BackendURI.hotels).then(res => res.json())

	// alter deffer, in react-router-dom v6, return a promise, hear is response.json()
	return {
		cities: cities,
		types: types,
		hotels: hotels
	}
}


