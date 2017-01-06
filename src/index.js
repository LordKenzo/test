module.exports = {
  test: function(number){
    if (typeof number !== 'number' || number === undefined){
      throw new Error('I need a number');
    } else {
      return number * number;
    }
  },
  s_test: function(string){
    if (typeof string !== 'string' || string === undefined){
      throw new Error('I need a string');
    } else {
      return string + string;
    }
  }
}