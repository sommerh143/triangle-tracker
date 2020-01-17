// alert('hello');
$(document).ready(function () {
  $("#sidelength").submit(function () {
    var side1answer = parseInt($("#side1").val());
    var side2answer = parseInt($("#side2").val());
    var side3answer = parseInt($("#side3").val());
    // console.log(side1answer);
    if (side1answer === side2answer && side2answer === side3answer) {
      alert('Equilateral');
    } else if (side1answer === 0 || side2answer === 0 || side3answer === 0) {
      alert('not a triangle');
    } else if (side1answer === side2answer || side1answer === side3answer || side2answer === side3answer) {
      alert('Isosceles');
    } else if (side1answer != side2answer != side3answer) {
      alert('Scalene');
    }
    else {
      alert('not a triangle');
    }
    event.preventDefault();
  });
});