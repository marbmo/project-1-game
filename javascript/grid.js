var Grid = function() {
    var navios = ['Porta-avião', 'Navio-tanque', 'Contratorpedeiro', 'Submarinos'];

    var table = document.createElement('table');
    table.classList.add('container');

    var section = document.getElementById('battleship');
    section.appendChild(table);
    
    for (var i = 0; i < 10; i++) {
        var tableRow = document.createElement('tr');
        for (var j = 0; j < 10; j++) {
            var tableData = document.createElement('td');
            tableData.classList.add('square');
            tableData.id = 'square-' + i + j
            tableRow.appendChild(tableData);
        }
        table.appendChild(tableRow);
    }

    var divNavios = document.createElement('div');
    divNavios.classList.add('button-ship');

    section.appendChild(divNavios);

    navios.forEach(function(element) {
        var button = document.createElement('button');
        button.innerText = element;

        divNavios.appendChild(button);
        return element;
    });

    squares = document.querySelectorAll('.square');
    squares.forEach(function(element) {
        element.addEventListener('click', function() {
            element.classList.add('active');
            // var ship = new Ship('teste', 5);
            console.log(element.id);
        });
    });
};