var Ship = function (name, size) {
    this.name = name;
    this.size = size;
}

Ship.prototype.placeRight = function() {
    var check = checkPlacement('Right', this.size);
    var id = element.id;

    id = id.split('-');

    if (check == false) {
        return 'Não é permitido colocar um navio nessa posição';
    } else {
        for (var i = 0; i < this.size; i++) {
            var square = document.getElementById('square-'+id[1][0]+(i+parseInt(id[1][1])));
            square.classList.add('ship');
        }
        return 'Navio colocado';
    }
};

Ship.prototype.placeLeft = function() {
    var check = checkPlacement('Left', this.size);

    if (check == false) {
        return 'Não é permitido colocar um navio nessa posição';
    } else {
        for (var i = 0; i < this.size; i++) {
            var square = document.getElementById('square-'+id[1][0]+(i-parseInt(id[1][1])));
            square.classList.add('ship');
        }
        return 'Navio colocado';
    }
};

Ship.prototype.placeUp = function() {
    var check = checkPlacement('Up', this.size);

    if (check == false) {
        return 'Não é permitido colocar um navio nessa posição';
    } else {
        for (var i = 0; i < this.size; i++) {
            var square = document.getElementById('square-'+(parseInt(id[1][0])+i)+id[1][1]);
            square.classList.add('ship');
        }
        return 'Navio colocado';
    }
};

Ship.prototype.placeDown = function() {
    var check = checkPlacement('Down', this.size);

    if (check == false) {
        return 'Não é permitido colocar um navio nessa posição';
    } else {
        for (var i = 0; i < this.size; i++) {
            var square = document.getElementById('square-'+(parseInt(id[1][0])-i)+id[1][1]);
            square.classList.add('ship');
        }
        return 'Navio colocado';
    }
};

function checkPlacement (direction, size) {
    for (var i = 0; i < size; i++) {
        var elementId = element.id;
        elementId = elementId.split('-');
        if (direction == 'Right') {
            if (element.classList.contains('ship') || elementId[1][1] > 9) {
                return false;
            }
        } else if (direction == 'Left') {
            if (element.classList.contains('ship') || elementId[1][1] < 0) {
                return false;
            }
        } else if (direction == 'Up') {
            if (element.classList.contains('ship') || elementId[1][0] < 0) {
                return false;
            }
        } else if (direction == 'Down') {
            if (element.classList.contains('ship') || elementId[1][0] > 9) {
                return false;
            }
        }
    }
}