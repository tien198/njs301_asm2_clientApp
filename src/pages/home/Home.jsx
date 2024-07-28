import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
// Data to display
import cities from "../../../data/city.json";
import types from "../../../data/type.json";
import hotelList from "../../../data/hotel_list.json";


const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<HomeContents />
		</div >
	);
};

export default Home;

function HomeContents() {
	cities[0];
	return (
		<div className="container mx-auto my-16 px-3 flex flex-col gap-7">
			<CitiesList cities={cities} />
			<TypesBrowse types={types} />
			<HotelList hList={hotelList} />
		</div>
	)
}

function CitiesList({ cities }) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
			{
				cities.map(city => {
					return <City city={city} key={city.name} />
				})
			}
		</div>

	)
}

function City({ city }) {
	return (
		<div style={{ backgroundImage: `url(${city.image})` }} className="h-80 w-full bg-no-repeat bg-cover bg-center rounded-xl relative">
			<div className="absolute bottom-8 left-7 text-white font-extrabold text-4xl">
				<p>{city.name}</p>
				<p>{city.subText}</p>
			</div>
		</div>
	)
}

function TypesBrowse({ types }) {
	return (
		<div className="flex flex-col gap-7">
			<h4 className="font-extrabold text-2xl">Browse by property type</h4>
			<div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
				{/* items */}
				{
					types.map(t => {
						return <TypeSeletion type={t} key={t.name} />
					})
				}
			</div>
		</div>
	)
}

function TypeSeletion({ type }) {
	return (
		<div className=" text-xl">
			<div style={{ backgroundImage: `url(${type.image})` }} className="mb-4 w-full h-32 lg:h-72 bg-cover rounded-xl"></div>
			<div className="font-semibold">{type.name}</div>
			<div className="font-light">{type.count} hotels</div>
		</div>
	)
}

function HotelList({ hList }) {
	return (
		<div className="flex flex-col gap-7">
			<h4 className="font-extrabold text-2xl">Home guest love</h4>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
				{/* items */}
				{
					hList.map(h => {
						return <Hotel hotel={h} key={h.name} />
					})
				}
			</div>
		</div>
	)
}

function Hotel({ hotel }) {
	return (
		<div className=" text-xl">
			<div style={{ backgroundImage: `url(${hotel.image_url})` }} className="mb-4 w-full h-56 lg:h-96 bg-cover "></div>
			<div className="flex flex-col gap-2">
				<p className="font-semibold underline text-violet-600">{hotel.name}</p>
				<p className="font-light">{hotel.city} hotels</p>
				<p className="font-semibold">Starting from ${hotel.price}</p>
				<p><span className="text-white bg-blue-800 p-1">{hotel.rate}</span> {hotel.type}</p>
			</div>
		</div>
	)
}