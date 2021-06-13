const { format_date, format_plural} = require('../utils/helpers');



test('format_date() returns a date string', () => {
    const date = new Date('2021-06-13 04:49:00');

    expect(format_date(date)).toBe('6/13/2021');
});



test('format_plural() returns pluralized word', () => {
    const word = 'Comment';
    const count = 2;
    
    expect(format_plural(word, count)).toBe('Comments');
});