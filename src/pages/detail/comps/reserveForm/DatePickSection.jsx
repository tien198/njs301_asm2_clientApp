import { useEffect } from "react";
import { DateRange } from "react-date-range";

import useStoreReserveForm from '../../store'
import BackendUri from '../../../../utilities/enums/backendUri'


function DatePickSection() {
  const {
    date, setDate, hotelId,
    setBookedRooms } = useStoreReserveForm()

  useEffect(() => {
    // after submit reserve form, form vals in `useStoreReserveForm()` will be change to inital state
    // it lead to `date` change and this useEffect() be re-execute
    // So that! this condition will prevent re-execute when the inital state of hotelId='' (falsy)
    if (!hotelId)
      return

    const reqBody = {
      hotelId,
      startDate: date[0].startDate.toISOString(),
      endDate: date[0].endDate.toISOString()
    }

    fetch(BackendUri.checkBookedRooms, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
      .then(res => res.json())
      .then(bookedRooms => {
        setBookedRooms(bookedRooms)
      })
      .catch(err => console.error(err))
  }, [date, hotelId, setBookedRooms])

  return (
    <div className="flex justify-center">
      <DateRange
        editableDateInputs={true}
        onChange={e => setDate([e.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        minDate={new Date(Date.now())}
      />
    </div>
  );
}

export default DatePickSection;