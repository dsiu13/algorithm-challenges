Array.prototype.sum = function () {
    var total = 0;
    var i = this.length;

    while (i--) {
        total += this[i];
    }

    return total;
}

////////////////////////////////////////

var count = 0;

for (var i = 0; i < array.length; i++){
  count += array[i];
}

////////////////////////////////////////

sum = array.reduce((pv, cv) => pv+cv, 0);
