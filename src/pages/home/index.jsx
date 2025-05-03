import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

import Fallback from '../../components/Fallback';
import Banner from './comps/Banner';
import Contact from '../../components/Contact';

import BackendURI from '../../utilities/enums/backendUri';

import TypesList from './comps/TypesList';
import CitiesList from './comps/CitiesList';
import HotelsList from './comps/HotelsList';
import getFetch from '../../utilities/api/getFetch';



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
					{cities => cities
						? <CitiesList cities={cities} />
						: <div>Fail to fetch !</div>
					}
				</Await>
			</Suspense>

			<Suspense fallback={<Fallback />}>
				<Await resolve={types}>
					{types => types
						? <TypesList types={types} />
						: <div>Fail to fetch !</div>
					}
				</Await>
			</Suspense>

			<Suspense fallback={<Fallback />}>
				<Await resolve={hotels}>
					{hotels => hotels
						? <HotelsList hList={hotels} />
						: <div>Fail to fetch !</div>
					}
				</Await>
			</Suspense>
		</div>
	)
}

export function loader() {
	const cities = getFetch(BackendURI.cities)
	const types = getFetch(BackendURI.types)
	const hotels = getFetch(BackendURI.hotels)

	// alter deffer, in react-router-dom v6, return a promise, hear is response.json()
	return {
		cities, types, hotels
	}
}
