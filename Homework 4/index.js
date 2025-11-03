let number = 200;

for (let i = 2; i <= number; i++) {
  let tup= true;

for (let bolnuvchi = 2; bolnuvchi < i; bolnuvchi++) {
    if (i % bolnuvchi === 0) {
      tup = false;
      break;
    }
  }

  if (tup) {
    console.log(i);
  }
}


// for( ;true; ){
//     let n = prompt("son kiriting")
//     if(n > 100 || n === null){
//         console.log(n);
//         break
//     }
// }
