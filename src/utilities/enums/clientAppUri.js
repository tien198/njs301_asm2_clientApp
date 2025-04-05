

const ClientAppURI = {
    home: '/',
    search: 'search',
    detail: 'detail',
}

const ClientApp_AbsoluteURI = {
    home: '/',
    search: '/' + ClientAppURI.search,
    detail: '/' + ClientAppURI.detail
}




const authBase = '/authen'

const AuthenURI = {
    base: authBase,
    login: 'login',
    signup: 'signup'
}

const AuthenURI_Absolute = {
    base: authBase,
    login: authBase + '/' + AuthenURI.login,
    signup: authBase + '/' + AuthenURI.signup
}

export default { ClientAppURI, ClientApp_AbsoluteURI, AuthenURI, AuthenURI_Absolute }