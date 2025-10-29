if (browser === "Edge") {
 console.log("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
  
} else {
  console.log("We hope that this page looks ok!");
  
}


let login = prompt("habar kiriting");

  login == "Employee"
    ? console.log("Hello")
    : login == "Director"
    ? console.log("Greetings")
    : login == ""
    ? console.log("No login")
    : "";

let result = prompt("son kiriting");

let a = 2
let b = 3

result = a + b < 4 ? "Below" : "Over";

