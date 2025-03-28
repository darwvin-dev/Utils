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

function jalaliToGregorian(jalaliDate) {
    let parts = jalaliDate.split("/");
    if (parts.length === 3) {
        let jYear = parseInt(parts[0]);
        let jMonth = parseInt(parts[1]);
        let jDay = parseInt(parts[2]);
        let gDate = new Date(jalali_to_gregorian(jYear, jMonth, jDay));
        return gDate.toISOString().split('T')[0];
    }
    return '';
}

function jalali_to_gregorian(jy, jm, jd) {
    let gy = jy + 621;
    let days = (jm < 7) ? ((jm - 1) * 31) + jd : ((jm - 7) * 30) + jd + 186;
    let gLeap = ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 1 : 0;
    let gYearDays = 365 + gLeap;
    let gDate = new Date(gy, 0, 1);
    gDate.setDate(gDate.getDate() + days - 1);
    return gDate;
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
