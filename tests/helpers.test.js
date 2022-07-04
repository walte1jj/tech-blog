const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date("2022-07-04 10:28:07");
    expect(format_date(date)).toBe("7/4/2022");
});