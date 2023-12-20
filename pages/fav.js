import data from '../data/fav-data.js';
console.log(data.tracks[0].title);

document.getElementById('image').setAttribute('src', data.image);
document.querySelector('.album-title').textContent = data.artist+ " - " + data.title;
document.getElementById('year').textContent = data.year;

const updateTable = (tableData, tbodyId) => {
    for (let i = 0; i < tableData.length; i++) {
        let tableBody = document.getElementById(tbodyId);
        let newRow = document.createElement('tr');
        let newCol1 = document.createElement('th');
        let newCol2 = document.createElement('td');
        let newCol3 = document.createElement('td');

        newCol1.setAttribute('scope', 'row');

        newCol1.textContent = tableData[i].year || i + 1;

        newCol2.textContent = tableData[i].chart || tableData[i].title;

        newCol3.textContent = tableData[i].position || tableData[i].duration;

        tableBody.appendChild(newRow);

        newRow.appendChild(newCol1);
        newRow.appendChild(newCol2);
        newRow.appendChild(newCol3);
    }
};

updateTable(data.tracks, 'content-table');
updateTable(data.chart, 'content-chart');

document.getElementById('accordion-body').textContent = data.history;
document.getElementById('content').textContent = data.content;

