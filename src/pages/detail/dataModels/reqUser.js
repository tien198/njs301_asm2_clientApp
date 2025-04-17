export default class ReqUser {
    userId = ''
    userName = ''

    static fromObject(obj) {
        const reqUser = new ReqUser()
        for (const key in reqUser) {
            reqUser[key] = obj[key]
        }
        return reqUser
    }
}