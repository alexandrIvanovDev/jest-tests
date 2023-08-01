const square = require('./square')

describe('Square', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    beforeAll(() => {
        // Один раз перед всеми тестами
    })

    test.skip('Корректное значение', () => {
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
        expect(square(2)).not.toBeUndefined()
    })

    test('Корректное количество вызовов', () => {
        const spy = jest.spyOn(Math, 'pow')
        square(2)
        expect(spy).toBeCalledTimes(1)
    })

    test('Корректное количество вызовов', () => {
        const spy = jest.spyOn(Math, 'pow')
        square(2 )
        expect(spy).toBeCalledTimes(1)
    })
})

describe('Square 1', () => {
    test('Корректное количество вызовов функции', () => {
        const callback = jest.fn()
        callback(square(2))
        expect(callback.mock.calls).toHaveLength(1)
    })
})