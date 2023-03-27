/*
* File: app.js
* Author: Gyüre Árpád
* Copyright: 2023, Gyüre Árpád
* Group: Szoft I-1-E
* Date: 2023-03-27
* Github: https://github.com/rp2022k/shipS
* Licenc: GNU GPL
*/

const doc = {
    tbody: null
};

const state = {
    ships: []
};

window.addEventListener('load', () => {
    init();
    getShips();
});

function init() {
    doc.tbody = document.querySelector('#tbody');
};

function getShips() {
    let host = 'http://localhost:8000/';
    let endpoint = 'ships';
    let url = host + endpoint;
    fetch(url)
    .then(response => response.json())
    .then(result => {
        //console.log(result);
        state.ships = result;
        render();
    })
    .catch(error => console.log(error));
};

function render() {
    let rows = '';
    state.ships.forEach(sh => {
        rows += `
            <tr>
                <td>${sh.name}</td>
                <td>${sh.length}</td>
                <td>${sh.price}</td>
                <td>${sh.person}</td>
                <td>${sh.trailer}</td>
            </tr>
        `;
    });
    doc.tbody.innerHTML = rows;
}
