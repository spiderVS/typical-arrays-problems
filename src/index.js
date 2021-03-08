
exports.min = function min (array) {
  let minimum = array[0];
  for (let i = 1; i < array.length; i++) {
  	//console.log(array.length);
    if (array[i] < minimum) {
     minimum = array[i];
	 //console.log(minimum);
   	}
  }
if (typeof minimum == "undefined") return 0;
return minimum;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
