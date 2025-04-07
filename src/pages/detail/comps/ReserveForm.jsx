import { useState } from "react";

export default function HotelBookingForm() {
  const [checkIn, setCheckIn] = useState("2022-09-04");
  const [checkOut, setCheckOut] = useState("2022-09-04");
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [total, setTotal] = useState(0);

  const rooms = [
    { id: "101", type: "Budget Double Room", price: 350 },
    { id: "201", type: "Budget Double Room", price: 350 },
    { id: "202", type: "Budget Double Room", price: 350 },
    { id: "301", type: "Budget Double Room", price: 350 },
    { id: "401", type: "Budget Twin Room", price: 350 },
    { id: "402", type: "Budget Twin Room", price: 350 },
    { id: "404", type: "Budget Twin Room", price: 350 },
  ];

  const handleRoomChange = (room) => {
    let updatedRooms = [...selectedRooms];
    if (updatedRooms.includes(room.id)) {
      updatedRooms = updatedRooms.filter((r) => r !== room.id);
    } else {
      updatedRooms.push(room.id);
    }
    setSelectedRooms(updatedRooms);
    const newTotal = updatedRooms.length * 350;
    setTotal(newTotal);
  };

  return (
    <div className=" mx-auto space-y-6 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Date Picker Section */}
        <div>
          <h2 className="text-xl font-semibold">Dates</h2>
          <div className="flex space-x-4 mt-2">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
          </div>
        </div>

        {/* Reservation Info */}
        <div>
          <h2 className="text-xl font-semibold">Reserve Info</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-3 py-2 rounded mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded mb-2"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border px-3 py-2 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      {/* Room Selection */}
      <div>
        <h2 className="text-xl font-semibold">Select Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Budget Double Room</h3>
            <p className="text-sm text-gray-600">Pay nothing until September 04, 2022</p>
            <p className="text-sm text-gray-600">Max people: 2</p>
            <p className="font-medium">$350</p>
            <div className="flex space-x-2 mt-2">
              {rooms.filter(r => r.type === "Budget Double Room").map((room) => (
                <label key={room.id}>
                  <input
                    type="checkbox"
                    value={room.id}
                    checked={selectedRooms.includes(room.id)}
                    onChange={() => handleRoomChange(room)}
                  /> {room.id}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Budget Twin Room</h3>
            <p className="text-sm text-gray-600">Free cancellation before September 06, 2022</p>
            <p className="text-sm text-gray-600">Max people: 2</p>
            <p className="font-medium">$350</p>
            <div className="flex space-x-2 mt-2">
              {rooms.filter(r => r.type === "Budget Twin Room").map((room) => (
                <label key={room.id}>
                  <input
                    type="checkbox"
                    value={room.id}
                    checked={selectedRooms.includes(room.id)}
                    onChange={() => handleRoomChange(room)}
                  /> {room.id}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Total + Action */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Total Bill: ${total}</p>
          <select className="border px-3 py-2 rounded mt-2">
            <option>Select Payment Method</option>
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Cash on Arrival</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Reserve Now
        </button>
      </div>
    </div>
  );
}
