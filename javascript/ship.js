var Ship = function (name, size, element) {
    this.name = name;
    this.size = size;
    this.element = element;
}

Ship.prototype.place = function(direction) {
    var check = checkPlacement(direction, this.size, this.element);
    var id = this.element.id;

    id = id.split('-');

    if (check == false) {
        return false;
    } else if (direction == 'Right') {
        for (var i = 0; i < this.size; i++) {
            var square = document.getElementById(id[0]+'-'+id[1]+'-'+(i+parseInt(id[2])));
            square.classList.add('ship');
            square.setAttribute('data-position', 1);
        }
        return true;
    } else if (direction == 'Left') {
        for (var i = 0; i < this.size; i++) {
            var square = document.getElementById(id[0]+'-'+id[1]+'-'+(i-parseInt(id[1])));
            square.classList.add('ship');
            square.setAttribute('data-position', 1);
        }
        return true;
    } else if (direction == 'Up') {
        for (var i = 0; i < this.size; i++) {
            var square = document.getElementById(id[0]+'-'+(parseInt(id[1])+i)+'-'+id[2]);
            square.classList.add('ship');
            square.setAttribute('data-position', 1);
        }
        return true;
    } else if (direction == 'Down') {
        for (var i = 0; i < this.size; i++) {
            var square = document.getElementById(id[0]+'-'+(parseInt(id[1])-i)+'-'+id[2]);
            square.classList.add('ship');
            square.setAttribute('data-position', 1);
        }
        return true;
    }
};

function checkPlacement (direction, size, element) {
    for (var i = 0; i < size; i++) {
        var elementId = element.id;
        elementId = elementId.split('-');
        if (direction == 'Right') {
            if (element.classList.contains('ship') || elementId[2]+i > 9) {
                return false;
            }
        } else if (direction == 'Left') {
            if (element.classList.contains('ship') || elementId[2]-i < 0) {
                return false;
            }
        } else if (direction == 'Up') {
            if (element.classList.contains('ship') || elementId[1]-i < 0) {
                return false;
            }
        } else if (direction == 'Down') {
            if (element.classList.contains('ship') || elementId[1]+i > 9) {
                return false;
            }
        }
    }
}