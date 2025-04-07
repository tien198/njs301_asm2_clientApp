export default class Hotel {
    address
    cheapestPrice
    city
    desc
    distance
    featured
    name
    photos
    rooms
    title
    type
    rating

    static fromObject(obj) {
        const hotel = new Hotel()
        Object.assign(hotel, obj)
        return hotel
    }
}