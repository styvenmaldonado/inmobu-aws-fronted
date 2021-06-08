const mobile = ['Mobile','Android','iPhone']

class UserAgentSwitcher {
    constructor(userAgent){
        this.isMobile = mobile.map(key => userAgent.includes(key)).some(el => el === true)
    }

}

module.exports = UserAgentSwitcher