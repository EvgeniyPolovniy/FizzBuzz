window.onload = function () {
  'use strict';

  var option = {
    one: 3,
    two: 7,
    colorNum: '#dde8f0',
    colorOne: '#97cbdc',
    colorTwo: '#018abd',
    colorOneTwo: '#004581',
    colorItemNum: '#001b48',
    nameOne: 'Fizz',
    nameTwo: 'Buss',
    start: 1,
    end: 100
  };

  function makeItems() {
    for ( var i = option.start; i <= option.end; i++) {
      var color = "";
      var string = "";
      function numberFormating(i) {
        var num = i.toString();
        while ( num.length < option.end.toString().length ) {
          num = '0' + num;
        }
        return num;
      }
      if (i % option.one == 0) {
        string += option.nameOne;
        color = option.colorOne;
      }
      if (i % option.two == 0) {
        string += option.nameTwo;
        color = option.colorTwo;
      }
      if ( i % option.two == 0 && i % option.one == 0 ) {
        color = option.colorOneTwo;
      }

      $(".list").append("<li style='background: "+ (color || option.colorNum) +"'><span class='number' style='background: "+option.colorItemNum+"'>"+numberFormating(i)+"</span><span>"+(string || i)+"</span></li>");
    }
  }

  $(".title").text('FizzBuss, more than necessary. For number '+option.one+' and '+option.two);
  makeItems();
}