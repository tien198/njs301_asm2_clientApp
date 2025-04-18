import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ReserveForm_Infor from './InforSection';
import ReserveForm_RoomsSelection from './RoomsSelectionSection';
import DatePickSection from './DatePickSection';

import useStoreReserveForm from '../../store'
import BackendUri from '../../../../utilities/enums/backendUri';
import ClientAppUri from '../../../../utilities/enums/clientAppUri';
import { getJwtToken } from '../../../../utilities/localStorageUtils/authenToken'

export default function HotelBookingForm({ hotel }) {

  const {
    date, fullName, email, hotelId, checkedRooms, payment, phone, cardNumber, totalBill,
    resetForm, setPayment
  } = useStoreReserveForm()

  const { userInfor } = useSelector(({ authen }) => authen)
  const user = {
    userId: userInfor.userId,
    userName: userInfor.userName
  }
  // const fetcher = useFetcher(res.status(401).send('Unauthorized'))
  const navigate = useNavigate()

  async function submitReserveForm() {
    const formData = {
      user,
      startDate: date[0].startDate.toISOString(),
      endDate: date[0].endDate.toISOString(),
      price: totalBill,
      rooms: checkedRooms,
      hotelId, fullName, email, payment, phone, cardNumber
    }
    const err = await action(formData)

    if (err) {
      if (err.status === 401) {
        navigate(ClientAppUri.AuthenURI_Absolute.login)
        alert(err.message + ' ! Please Log in !')
      }
      else {
        console.error(err)
        alert('fail to submit reserve form !')
      }
    }
    else {
      await resetForm()
      navigate(ClientAppUri.ClientApp_AbsoluteURI.transaction)
    }
  }

  return (
    <div className=' mx-auto space-y-6 text-gray-800'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Date Picker Section - InforForm*/}
        <DatePickSection />
        <ReserveForm_Infor />
      </div>

      {/* Room Selection */}
      <div>
        <h5 className='text-xl font-semibold'>Select Rooms</h5>
        <ReserveForm_RoomsSelection roomsList={hotel.roomsList} />
      </div>

      {/* Total + Action */}
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-lg font-semibold'>Total Bill: ${totalBill}</p>
          <select className='border px-3 py-2 rounded mt-2'
            value={payment} onChange={e => setPayment(e.target.value)}>
            <option>Select Payment Method</option>
            <option value='Credit'>Credit Card</option>
            <option value='Card'>Card</option>
            <option value='Cash'>Cash on Arrival</option>
          </select>
        </div>
        <button className='bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700'
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
        'content-type': 'application/json',
        'authorization': getJwtToken()
      },
      body: JSON.stringify(reqBody)
    })
    if (res.ok) {
      return false
    }

    return await res.json()
  }
  catch (err) {
    console.error(err);
    alert('fail to submit reserve form !')
    return err
  }
}