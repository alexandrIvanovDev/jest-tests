const delay = require('./delay');

describe('Delay', () => {
    test('Корректное значение', async () => {
        const sum = await delay(() => 5 + 1, 4000)
        expect(sum).toBe(6)
    })
})