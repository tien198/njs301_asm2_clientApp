export default class ReserveFormReqBody {
  fullName
  email
  hotelId
  rooms
  price
  payment
  phone
  cardNumber
  startDate
  endDate

  static assign(obj) {
    const reqBody = new ReserveFormReqBody()
    Object.assign(reqBody, obj)
    return reqBody
  }

  static fromObject(obj) {
    const reqBody = new ReserveFormReqBody()
    for (const key in reqBody) {
      reqBody[key] = obj[key]
    }
    return reqBody
  }
}
