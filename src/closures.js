//A Closure is created every time a function returns another function defined within it.
function add(x) {
    return function(y) {
      return x + y
    }
  }
  var add2 = add(2)
  var add3 = add(3)
  add2(4) //==>> 6
  add3(6) //==>> 9

  //here the function add takes a single variable x and returns a function, 
  //which in turn takes a single variable y and returns the sum of x and y.
  