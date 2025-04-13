import { useNavigate } from "react-router-dom";

import ReserveForm_Infor from "./InforSection";
import ReserveForm_RoomsSelection from "./RoomsSelectionSection";
import DatePickSection from "./DatePickSection";

import useStoreReserveForm from '../../store'
import BackendUri from "../../../../utilities/enums/backendUri";

export default function HotelBookingForm({ hotel }) {

  const {
    date, fullName, email, hotelId, rooms, price, payment, phone, cardNumber,
    resetForm
  } = useStoreReserveForm()

  // const fetcher = useFetcher()
  const navigate = useNavigate()

  async function submitReserveForm() {
    const formData = {
      startDate: date[0].startDate.toISOString(),
      endDate: date[0].endDate.toISOString(),
      fullName, email, hotelId, rooms, price, payment, phone, cardNumber
    }
    const err = await action(formData)

    if (err) {
      console.error(err)
    }
    else {
      await resetForm()
      navigate('/')
    }
  }

  return (
    <div className=" mx-auto space-y-6 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Date Picker Section - InforForm*/}
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
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          onClick={submitReserveForm}>
          Reserve Now
        </button>
      </div>
    </div>
  );
}

// return Error object if fetch return error
// othewise, return false
async function action(reqBody) {
  try {
    const res = await fetch(BackendUri.addTransaction, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
    if (res.ok) {
      return false
    }
    alert('fail to submit reserve form !')
    return await res.json()
  }
  catch (err) {
    console.error(err);
    alert('fail to submit reserve form !')
    return err
  }
}