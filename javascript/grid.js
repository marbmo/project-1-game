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
        });
    });
};

Grid.prototype.attack = function() {
    if (element.classList.contains('ship')) {
        this.element.classList.add('hit');
    } else {
        this.element.classList.add('water');
    };
};

Grid.prototype.randomShips = function() {
    // var portaAviao = new Ship('Porta-aviao', 5, document.getElementById('computador-0-0'));
    // var navioTanque = new Ship('Navio-tanque', 4, document.getElementById('computador-1-0'));
    // var contratorpedeiro = new Ship('Contratorpedeiro', 3, document.getElementById('computador-2-0'));
    // var submarino = new Ship('Submarino', 2, document.getElementById('computador-3-0'));

    var name = this.name;

    // var navios = [['Porta-aviao', 5], ['Navio-tanque', 4], ['Contratorpedeiro', 3], ['Submarino', 2]];
    var navios = [['Porta-aviao', 5]]
    navios.forEach(function(e) {
        var check = false;
        // while (check == false) {
            var position = document.getElementById(name + '-' + (Math.floor(Math.random() * 10)) + '-' + (Math.floor(Math.random() * 10)));
            var directions = ['Right', 'Left', 'Up', 'Down'];
            for (var i = 0; i < directions.length; i++) {
                var arrayPosition = Math.floor(Math.random() * directions.length);
                var navio = new Ship(e[0], e[1], position);
                check = navio.place(directions[arrayPosition]);
            };
        // };
    });
};