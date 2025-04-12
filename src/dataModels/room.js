export default class Room {
    createdAt
    desc
    maxPeople
    price
    roomNumbers
    title
    updatedAt

    static assign(obj) {
        const room = new Room()
        Object.assign(room, obj)
        return room
    }

    static fromObject(obj) {
        const room = new Room()
        for (const key in room) {
            room[key] = obj[key]
        }
        return room
    }
}