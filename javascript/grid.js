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
    ships.forEach(function(element) {
        if (element.classList.contains('computador')) {
            element.classList.add('hidden-ship');
        }
    });
}

function attack (element) {
    var turn = 'player';
    var computerGrid = document.querySelectorAll('.computador');

    if(turn == 'player' && element.classList.contains('computador')) {
        if (element.classList.contains('ship')) {
            console.log('Hit a ship');
            element.classList.add('hit');
            element.classList.remove('ship');
            turn = 'computer';
        } else {
            console.log('Missed a ship');
            element.classList.add('miss');
            turn = 'computer';
        }
        computerGrid.forEach(function(element) {
            element.classList.add('no-click');
        });
    }

    var playerGrid = document.querySelectorAll('.player');

    if (turn == 'computer') {
        var randomPosition = Math.floor(Math.random() * 100);
        if (playerGrid[randomPosition].classList.contains('ship')) {
            console.log('Computer hit a ship');
            playerGrid[randomPosition].classList.add('hit');
            playerGrid[randomPosition].classList.remove('ship');
            turn = 'player';
        } else {
            console.log('Computer missed a ship');
            playerGrid[randomPosition].classList.add('miss');
            turn = 'player';
        }
        computerGrid.forEach(function(element) {
            element.classList.remove('no-click');
        });
    }
}