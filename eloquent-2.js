//Exercises


//Looping a Triangle
for (var i = "#"; i.length <= 7; i = i += "#")
  console.log(i);

//FizzBuzz
for (var i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz")
  } else if (i % 3 == 0) {
    console.log("Fizz")
  } else if (i % 5 == 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}

//Chess Board
var board = "";
var size = 8

for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board)
