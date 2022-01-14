export default class ContractService {
    async signeContract() {

    }
    async resilierContract() {
        console.log('resilner')
    }
    async getMyContracts() {
        let userInfo = JSON.parse(localStorage.getItem("user-info"))
        console.log(userInfo)
        return userInfo.contrats
    }
}