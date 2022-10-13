export const formatDate = (date) => {
    let d = new Date(date),
        year = d.getFullYear(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('/');
};

export const subString = (str, n) => {
    if (str.replace(/[\u4e00-\u9fa5]/g, '**').length <= n) {
        return str;
    } else {
        let len = 0;
        let tmpStr = '';
        for (let i = 0; i < str.length; i++) {
            if (/[\u4e00-\u9fa5]/.test(str[i])) {
                len += 2;
            } else {
                len += 1;
            }
            if (len > n) {
                break;
            } else {
                tmpStr += str[i];
            }
        }
        return tmpStr + ' ...';
    }
};
