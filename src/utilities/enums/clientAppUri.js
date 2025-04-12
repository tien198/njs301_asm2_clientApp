

export const ClientAppURI = {
    home: '/',
    search: 'search',
    detail: 'detail',
    reserveHotel: 'reserve-hotel'
}

export const ClientApp_AbsoluteURI = {
    home: '/',
    search: '/' + ClientAppURI.search,
    detail: '/' + ClientAppURI.detail,
    reserveHotel: '/' + ClientAppURI.reserveHotel
}




const authBase = '/authen'

export const AuthenURI = {
    base: authBase,
    login: 'login',
    signup: 'signup',
    logout: 'logout'
}

export const AuthenURI_Absolute = {
    base: authBase,
    login: authBase + '/' + AuthenURI.login,
    signup: authBase + '/' + AuthenURI.signup,
    logout: authBase + '/' + AuthenURI.logout,
}

export default { ClientAppURI, ClientApp_AbsoluteURI, AuthenURI, AuthenURI_Absolute }