
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
    const { roomNumbers } = room

    const { rooms, setRooms, } = useStoreReserveForm()

    const roomIndex = rooms.findIndex(i => i.roomId === room._id)
    const roomS = rooms[roomIndex]
    function onCheck(rNumber) {
        // room not found! Insert this roomNumber
        if (roomIndex < 0) {
            const inRoom = {
                roomId: room._id,
                roomNumbers: [rNumber]
            }
            rooms.push(inRoom)
            setRooms(rooms)
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
            <h6 className="font-semibold">Budget Double Room</h6>
            <p className="text-sm text-gray-600">Pay nothing until September 04, 2022</p>
            <p className="text-sm text-gray-600">Max people: 2</p>
            <p className="font-medium">$350</p>
            <div className="flex space-x-2 mt-2">
                {roomNumbers.map((num) =>
                    <label key={num}>
                        <input
                            type="checkbox"
                            value={num}
                            checked={roomS ? roomS.roomNumbers.includes(num) : false}
                            onChange={() => onCheck(num)}
                        /> {num}
                    </label>
                )}
            </div>
        </div>
    )
}