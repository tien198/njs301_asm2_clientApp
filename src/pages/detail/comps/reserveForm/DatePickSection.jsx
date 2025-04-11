import { useEffect } from "react";
import { DateRange } from "react-date-range";

import useStoreReserveForm from '../../store'
import BackendUri from '../../../../utilities/enums/backendUri'


function DatePickSection() {
  const { date, setDate, hotelId } = useStoreReserveForm()

  useEffect(() => {
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
      .then(data => {
        console.log(data)
      })
      .catch(err => console.error(err))
  }, [date])

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