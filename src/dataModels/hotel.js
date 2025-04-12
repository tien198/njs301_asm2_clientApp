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

    static assign(obj) {
        const hotel = new Hotel()
        Object.assign(hotel, obj)
        return hotel
    }
    
    static fromObject(obj) {
        const hotel = new Hotel()
        for (const key in hotel) {
            hotel[key] = obj[key]
        }
        return hotel
    }
}