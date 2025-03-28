import { format } from 'date-fns'


export function convertDateRangeToString(date) {
    return `${format(date[0].startDate, 'yyyy/MM/dd')} to ${format(date[0].endDate, 'yyyy/MM/dd')}`
}

export function convertStringToDateRange(str) {
    const d = str.split(' to ')
    return [{
        startDate: new Date(d[0]),
        endDate: new Date(d[1]),
        key: 'selection'
    }]
}