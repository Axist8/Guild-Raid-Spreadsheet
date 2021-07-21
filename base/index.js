const raidtable = document.getElementById('raidtable');

const tables = document.getElementsByTagName('table');
const tablesArray = Array.prototype.slice.call(tables);
tablesArray.shift() 

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

const allcells = document.getElementsByTagName('td');
for (const cell of allcells) {
    if (cell.innerText === '0') {
        cell.classList.add('missed');
    }
    cell.innerText = cell.innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
