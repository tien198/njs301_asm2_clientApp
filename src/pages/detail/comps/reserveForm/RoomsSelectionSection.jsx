
function ReserveForm_RoomsSelection({ roomsList }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roomsList.map(i =>
                <Rooms room={i} key={i._id} />
            )}
        </div>
    );
}

export default ReserveForm_RoomsSelection;



import useStoreReserveForm from '../../store'

function Rooms({ room }) {
    const { roomNumbers, title, desc, maxPeople, price } = room

    const {
        rooms, bookedRooms,
        setRooms } = useStoreReserveForm()

    const roomIndex = rooms.findIndex(i => i.roomId === room._id)
    const availableRoom = rooms[roomIndex]

    // const bookedRoom = bookedRooms.find(i => i.roomId === )

    function onCheck(rNumber) {
        // room not found! Insert this roomNumber
        if (roomIndex < 0) {
            const inRoom = {
                roomId: room._id,
                roomNumbers: [rNumber]
            }
            setRooms([...rooms, inRoom])
            return
        }

        const rNumberIndex = rooms[roomIndex].roomNumbers.findIndex(i => i === rNumber)
        // roomNumber not found! Insert this roomNumber to defined room
        if (rNumberIndex < 0) {
            rooms[roomIndex].roomNumbers.push(rNumber)
            setRooms(rooms)
        }

        // otherwise! Remove this
        else {
            rooms[roomIndex].roomNumbers.splice(rNumberIndex, 1)
            if (rooms[roomIndex].roomNumbers.length <= 0) {
                rooms.splice(roomIndex, 1)
            }
            setRooms(rooms)
        }
    }

    return (
        <div>
            <h6 className="font-semibold">{title}</h6>
            <p className="text-sm text-gray-600">{desc}</p>
            <p className="text-sm text-gray-600">Max people: {maxPeople}</p>
            <p className="font-medium">$ {price}</p>
            <div className="flex space-x-2 mt-2">
                {roomNumbers.map((num) =>
                    <label key={num}>
                        <input
                            type="checkbox"
                            value={num}
                            checked={(availableRoom && availableRoom.roomNumbers)
                                ? availableRoom.roomNumbers.includes(num)
                                : false}
                            onChange={() => onCheck(num)}
                        /> {num}
                    </label>
                )}
            </div>
        </div>
    )
}