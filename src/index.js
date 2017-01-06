module.exports = {
  test: function(number){
    if (typeof number !== 'number' || number === undefined){
      throw new Error('I need a number');
    } else {
      return number * number;
    }
  }
}