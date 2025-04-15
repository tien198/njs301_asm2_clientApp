
function ReserveForm_RoomsSelection({ roomsList }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roomsList.map((r, i) =>
                <Room room={r} index={i} key={r._id} />
            )}
        </div>
    );
}

export default ReserveForm_RoomsSelection;



import useStoreReserveForm from '../../store'

function Room({ room, index }) {
    const { roomNumbers, title, desc, maxPeople, price } = room

    const {
        checkedRooms, bookedRooms,
        setCheckedRooms,
        addToBill, minusToBill } = useStoreReserveForm()

    const roomIndex = checkedRooms.findIndex(i => i.roomId === room._id)
    const checkedRoom = checkedRooms[roomIndex]

    const bookedRoomNumbers = bookedRooms[index] || []

    function onCheck(rNumber) {
        // room not found! Insert this roomNumber
        if (roomIndex < 0) {
            const inRoom = {
                roomId: room._id,
                roomNumbers: [rNumber],
                price
            }
            setCheckedRooms([...checkedRooms, inRoom])
            addToBill(price)
            return
        }

        const rNumberIndex = checkedRooms[roomIndex].roomNumbers.findIndex(i => i === rNumber)
        // roomNumber not found! Insert this roomNumber to defined room
        if (rNumberIndex < 0) {
            checkedRooms[roomIndex].roomNumbers.push(rNumber)
            setCheckedRooms(checkedRooms)
            addToBill(price)
        }

        // otherwise! Remove this
        else {
            checkedRooms[roomIndex].roomNumbers.splice(rNumberIndex, 1)
            if (checkedRooms[roomIndex].roomNumbers.length <= 0) {
                checkedRooms.splice(roomIndex, 1)
            }
            setCheckedRooms(checkedRooms)
            minusToBill(price)
        }
    }

    return (
        <div>
            <h6 className="font-semibold">{title}</h6>
            <p className="text-sm text-gray-600">{desc}</p>
            <p className="text-sm text-gray-600">Max people: {maxPeople}</p>
            <p className="font-medium">$ {checkedRoom && checkedRoom.roomNumbers
                ? checkedRoom.roomNumbers.length * price
                : 0}
            </p>
            <div className="flex space-x-2 mt-2">
                {roomNumbers.map((num, index) =>
                    <label key={num}>
                        <input
                            type="checkbox"
                            value={num}
                            disabled={bookedRoomNumbers[index]}
                            checked={(checkedRoom && checkedRoom.roomNumbers)
                                ? checkedRoom.roomNumbers.includes(num)
                                : false}
                            onChange={() => onCheck(num)}
                        /> {num}
                    </label>
                )}
            </div>
        </div>
    )
}