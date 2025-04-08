import { DateRange } from "react-date-range";

import useStoreReserveForm from '../../store'


function DatePickSection() {
  const {date, setDate} =useStoreReserveForm()
    return (
        <div className="flex justify-center">
          <DateRange
            editableDateInputs={true}
            onChange={e=>setDate([e.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date(Date.now())}
          />
        </div>
    );
}

export default DatePickSection;