const raidtable = document.getElementById('raidtable');

const tables = document.getElementsByTagName('table');

for (const table of tables) {
    const cells = table.getElementsByTagName('td');

    for (let i = 0; i < 14; i++) {
        let dailytotal = parseInt(cells[i].innerText)
            + parseInt(cells[i + 14].innerText)
            + parseInt(cells[i + 28].innerText);
        if (isNaN(dailytotal)) {
            dailytotal = 0;
        }
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
}
