function convertToJalali(date) {
    const formatter = new Intl.DateTimeFormat('en-US-u-ca-persian', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const parts = formatter.formatToParts(date);
    const year = parts.find(part => part.type === 'year').value;
    const month = parts.find(part => part.type === 'month').value;
    const day = parts.find(part => part.type === 'day').value;

    return `${year}/${month}/${day}`;
}

function jalaliDateToGregorian(jalaliDate) {
    const [year, month, day] = jalaliDate.split('/').map(Number);

    const formatter = new Intl.DateTimeFormat('en-US-u-ca-persian', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const gregorianDate = new Date(
        formatter.formatToParts(new Date(Date.UTC(year, month - 1, day)))
            .find(part => part.type === 'year').value,
        formatter.formatToParts(new Date(Date.UTC(year, month - 1, day)))
            .find(part => part.type === 'month').value - 1,
        formatter.formatToParts(new Date(Date.UTC(year, month - 1, day)))
            .find(part => part.type === 'day').value
    );

    return gregorianDate;
}
