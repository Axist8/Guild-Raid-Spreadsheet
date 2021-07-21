const raidtable = document.getElementById('raidtable');

const tables = document.getElementsByTagName('table');
const tablesArray = Array.prototype.slice.call(tables);
tablesArray.shift();
tablesArray.pop();

for (const table of tablesArray) {
    const cells = table.getElementsByTagName('td');

    for (let i = 0; i < 14; i++) {
        let first = parseInt(cells[i].innerText);
        if (isNaN(first)) {
            first = 0;
        };
        let second = parseInt(cells[i + 14].innerText);
        if (isNaN(second)) {
            second = 0;
        }
        let third = parseInt(cells[i + 28].innerText);
        if (isNaN(third)) {
            third = 0;
        }
        const dailytotal = first + second + third;
        cells[i + 42].innerText = dailytotal;
    }

    let total = 0
    for (let j = 42; j < 56; j++) {
        total += parseInt(cells[j].innerText);
    }
    cells[56].innerText = total;
}

const dayOneTotal = document.getElementsByClassName('dayone');
const dayTwoTotal = document.getElementsByClassName('daytwo');
const dayThreeTotal = document.getElementsByClassName('daythree');
const dayFourTotal = document.getElementsByClassName('dayfour');
const dayFiveTotal = document.getElementsByClassName('dayfive');
const daySixTotal = document.getElementsByClassName('daysix');
const daySevenTotal = document.getElementsByClassName('dayseven');
const dayEightTotal = document.getElementsByClassName('dayeight');
const dayNineTotal = document.getElementsByClassName('daynine');
const dayTenTotal = document.getElementsByClassName('dayten');
const dayElevenTotal = document.getElementsByClassName('dayeleven');
const dayTwelveTotal = document.getElementsByClassName('daytwelve');
const dayThirteenTotal = document.getElementsByClassName('daythirteen');
const dayFourteenTotal = document.getElementsByClassName('dayfourteen');
const dailytotals = [dayOneTotal, dayTwoTotal, dayThreeTotal, dayFourTotal, dayFiveTotal,
    daySixTotal, daySevenTotal, dayEightTotal, dayNineTotal, dayTenTotal, dayElevenTotal,
    dayTwelveTotal, dayThirteenTotal, dayFourteenTotal]

for (const day of dailytotals) {
    let counter = 0;
    for (let i = 0; i < (day.length - 1); i++) {
        let personalDailyTotal = parseInt(day[i].innerText);
        if (isNaN(personalDailyTotal)) {
            personalDailyTotal = 0;
        }
        counter += personalDailyTotal;
    }
    day[30].innerText = counter;
}

const allTotals = document.getElementsByClassName('guilddaily');
let absoluteTotal = 0;
for (let totall of allTotals) {
    const guildDailyTotal = parseInt(totall.innerText);
    if (isNaN(guildDailyTotal)) {
        guildDailyTotal = 0;
    }
    absoluteTotal += guildDailyTotal;
}
document.getElementById('absolutetotal').innerText = absoluteTotal;

const allcells = document.getElementsByTagName('td');
for (const cell of allcells) {
    if (cell.innerText === '0') {
        cell.classList.add('missed');
    }
    cell.innerText = cell.innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
