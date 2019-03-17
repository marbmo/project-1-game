var Grid = function(name) {
    this.name = name;

    var table = document.createElement('table');
    table.classList.add('container');

    var section = document.getElementById('battleship');
    section.appendChild(table);
    
    for (var i = 0; i < 10; i++) {
        var tableRow = document.createElement('tr');
        for (var j = 0; j < 10; j++) {
            var tableData = document.createElement('td');
            tableData.classList.add('square');
            tableData.classList.add(this.name);
            tableData.setAttribute('data-position', 0);
            tableData.id = this.name + '-' + i + '-' + j;
            tableRow.appendChild(tableData);
        }
        table.appendChild(tableRow);
    }

    squares = document.querySelectorAll('.' + this.name);
    squares.forEach(function(element) {
        element.addEventListener('click', function() {
            element.classList.add('active');
            attack(element);
        });
    });
};

Grid.prototype.randomShips = function() {
    var name = this.name;

    var navios = [['Porta-aviao', 5], ['Navio-tanque', 4], ['Contratorpedeiro', 3], ['Submarino', 2]];
    navios.forEach(function(e) {
        var check = false;
        while (check == false) {
            var randomNumber1 = Math.floor(Math.random() * 10);
            var randomNumber2 = Math.floor(Math.random() * 10);
            var position = document.getElementById(name + '-' + randomNumber1 + '-' + randomNumber2);
            var directions = ['Right', 'Left', 'Up', 'Down'];
            for (var i = 0; i < directions.length; i++) {
                var arrayPosition = Math.floor(Math.random() * directions.length);
                var navio = new Ship(e[0], e[1], position);
                check = navio.place(directions[arrayPosition]);
                if (check == true) {
                    break;
                }
                directions.splice(directions[arrayPosition], 1);
            };
        };
    });
};

Grid.prototype.computerShips = function() {
    var ships = document.querySelectorAll('.ship');
    console.log(ships);
    ships.forEach(function(element) {
        element.classList.add('hidden-ship');
    });
}

function attack (element) {
    if (element.classList.contains('ship')) {
        console.log('Hit a ship');
        element.classList.add('hit');
        element.classList.remove('ship');
    } else {
        console.log('Missed a ship');
        element.classList.add('miss');
    }
}