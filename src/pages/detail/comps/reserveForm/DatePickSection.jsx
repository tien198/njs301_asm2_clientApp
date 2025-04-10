import { useEffect } from "react";
import { DateRange } from "react-date-range";

import useStoreReserveForm from '../../store'
import BackendUri from '../../../../utilities/enums/backendUri'


function DatePickSection() {
  const { date, setDate } = useStoreReserveForm()

  useEffect(() => {
    fetch(BackendUri.checkBookedRooms)
      .then(res => res.json())
      .then(rooms => {
        
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