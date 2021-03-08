
exports.min = function min (array) {
  if ((!array)||(array.length == 0)) return 0;
  let minimum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
     minimum = array[i]; 
   	}
  }
return minimum;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
