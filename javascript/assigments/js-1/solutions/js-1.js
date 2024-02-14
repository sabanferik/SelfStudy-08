//***************SORU1*******************

const not = +prompt("Notu girin:");

if (not < 0 || not > 100) {
  console.log(" 0-100 aralığında bir sayı girin.");
} else if (not >= 0 && not <= 25) {
  console.log("Not: FF");
} else if (not >= 26 && not <= 45) {
  console.log("Not: DD");
} else if (not >= 46 && not <= 65) {
  console.log("Not: CC");
} else if (not >= 66 && not <= 75) {
  console.log("Not: BB");
} else if (not >= 76 && not <= 90) {
  console.log("Not: BA");
} else if (not >= 91 && not <= 100) {
  console.log("Not: AA");
}


// ----------------SORU2-------------------//

let month = prompt("Please write a month");
let result1 = "";
switch (month) {
  case "january":
    result1 = "1st";
    break;
  case "february":
    result1 = "2nd";
    break;
  case "march":
    result1 = "3rd";
    break;
  case "april":
    result1 = "4th";
    break;
  case "may":
    result1 = "5th";
    break;
  case "june":
    result1 = "6th";
    break;
  case "july":
    result1 = "7th";
    break;
  case "august":
    result1 = "8th";
    break;
  case "september":
    result1 = "9th";
    break;
  case "october":
    result1 = "10th";
    break;
  case "november":
    result1 = "11th";
    break;
  case "december":
    result1 = "12th";

    break;
  default:
    alert("invalid entry");
    break;
}

console.log(`${month} is the ${result1} month of the year`);

// ----------------SORU3-------------------//

alert(
  "please enter only numbers with different values in order to see the numbers; sum, multiply, min and max."
);
x = +prompt();
y = +prompt();
z = +prompt();

if (x != y && y != x && y != z) {
  if (x < y && y < z) {
    smallNumber = x;
    bigNumber = z;
  } else if (x < y && z < y) {
    smallNumber = x;
    bigNumber = y;
  } else if (y < z && z < x) {
    smallNumber = y;
    bigNumber = x;
  } else if (y < x && x < z) {
    smallNumber = y;
    bigNumber = z;
  } else if (z < x && x < y) {
    smallNumber = z;
    bigNumber = y;
  } else if (z < y && y < x) {
    smallNumber = z;
    bigNumber = x;
  }

  console.log("sum of the numbers you have entered is:", x + y + z);

  console.log("multiply of the numbers you have entered is:", x * y * z);

  console.log("smallest number you have entered is", smallNumber);

  console.log("biggest number you have entered is", bigNumber);

  alert("you can see the results in console section");
} else if (x == z || y == x || y == z) {
  alert(
    "equivalance is not a part of the programm. Please enter numbers with different values"
  );
} else {
  alert("invalid input please try again");
}

// ----------------SORU4-------------------//

let input = +prompt("Please enter a number to see the number is even or odd.");
let result = input % 2 == 0 ? "even" : "odd";
console.log(result);

//----------------SORU5-------------------//

let process = prompt(
  "Welcome to the fahrenheit-celcius converter. You can type F for Fahrenheit to Celcius or C for Celcius to Fahrenheit."
);

console.log(process);
if (process === "f" || process == "F") {
  let fahrenheit = +prompt(
    "please enter a number of fahreinheit to convert into celcius"
  );

  let celcius = (fahrenheit - 32) * 0.5556;
  console.log(`${celcius} Celcius`);
  alert("you can see the result in console");
} else if (process == "c" || process == "C") {
  let celcius = +prompt(
    "please enter a number of celcius to convert into fahrenheit"
  );

  let fahrenheit = celcius * 1.8 + 32;
  console.log(`${fahrenheit} Fahrenheit`);
  alert("you can see the result in console");
} else {
  alert("invalid input please try again");
}


