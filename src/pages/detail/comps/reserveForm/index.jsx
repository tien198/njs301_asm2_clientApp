import { useEffect, useState } from "react";

import Room from '../../../../dataModels/room'

import ReserveForm_Infor from "./InforSection";
import ReserveForm_RoomsSelection from "./RoomsSelectionSection";
import DatePickSection from "./DatePickSection";

import useStoreReserveForm from '../../store'


export default function HotelBookingForm({ hotel }) {

  const {
    date, fullName, email, hotelId, rooms, price, payment, phone, cardNumber
  } = useStoreReserveForm()
  const { setHotelId } = useStoreReserveForm()

  useEffect(() => {
    setHotelId(hotel._id)
  }, [])

  return (
    <div className=" mx-auto space-y-6 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Date Picker Section */}
        <DatePickSection />

        <ReserveForm_Infor />
      </div>

      {/* Room Selection */}
      <div>
        <h5 className="text-xl font-semibold">Select Rooms</h5>
        <ReserveForm_RoomsSelection roomsList={hotel.roomsList} />
      </div>

      {/* Total + Action */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Total Bill: ${price}</p>
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
