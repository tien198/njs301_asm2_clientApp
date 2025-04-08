const base = 'http://localhost:5000'
const BackendUri = {
    base,
    cities: base + '/cities',
    types: base + '/types',
    hotels: base + '/hotels',
    hotelDetail: base + '/hotel',
    searchHotels: base + '/search-hotels',

    login: base + '/login',
    signUp: base + '/sign-up',

    transaction: base + '/transaction'
}

export default BackendUri;