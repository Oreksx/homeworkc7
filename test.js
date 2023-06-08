const getcurrency = require('./getCurrency');

test('7 деталей', () => {
    expect(getCurrency(7)).toBe('7 долларов');
});

const list = {
    0: '0 долларов',
    1: '1 доллар',
    101: '101 доллар',
    11: '11 долларов',
    21: '21 доллар',
    54: '54 доллара',
    121224: '121224 доллара',
    80: '80 долларов',
};

for(let i in list) {
    test(list[i], () => {
        expect(getCurrency(+i)).toBe(list[i]);
    })
}
