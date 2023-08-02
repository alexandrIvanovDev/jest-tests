const getData = require('./getData')
const axios = require('axios')

jest.mock('axios')

describe('getData', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net"
                }
            ]
        }
    })
    test('Корректное значение', async () => {
        axios.get.mockReturnValue(response)
        const data = await getData()
        expect(axios.get).toBeCalledTimes(1 )
        expect(data).toEqual(['1', '2', '3'])
        expect(data).toMatchSnapshot()
    })
})