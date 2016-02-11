var Hamming = function() {};

Hamming.prototype.compute = function(input1, input2){
  var differences = [];

  if (input1.length !== input2.length){
    throw new Error('DNA strands must be of equal length.')
  }

  for (var i = input1.length - 1; i >= 0; i--) {

      if (input1[i] !== input2[i]) {
      differences.push(input1[i]);
      }
    
  }
  return differences.length;
    
}








module.exports = Hamming;