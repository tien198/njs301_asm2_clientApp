export default class Room {
    createdAt
    desc
    maxPeople
    price
    roomNumbers
    title
    updatedAt

    static fromObject(obj) {
        const room = new Room()
        Object.assign(room, obj)
        return room
    }
}