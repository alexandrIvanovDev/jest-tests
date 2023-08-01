const mapArrToString = require('./mapArrToString')


describe('mapArrToString', () => {
    test('Корректное значение', () => {
        expect(mapArrToString([1, 2, 3])).toStrictEqual(['1', '2', '3'])
    })
    test('Разные значения', () => {
        expect(mapArrToString([1, null, 3, 'hello', 2])).toStrictEqual(['1', '3', '2'])
    })
    test('Пустой массив', () => {
        expect(mapArrToString([])).toStrictEqual([])
    })
    test('Отрицание', () => {
        expect(mapArrToString([1, 2, 3])).not.toStrictEqual([1, 2, 3])
    })
})