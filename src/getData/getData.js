const axios = require('axios')
const mapArrToString = require('../mapArrToString/mapArrToString')

const getData = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const arrUserId = res.data.map(u => u.id)
        return mapArrToString(arrUserId)
    } catch (e) {
        console.log('error')
    }
}

module.exports = getData