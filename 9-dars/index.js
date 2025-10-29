// let data = 21;

// if (data % 2 === 1 ) {
//     console.log("toq son");
// }
// else if (data % 2 === 0 ){
//     console.log("juft son");
// }
// else{
//     console.log("Siz notogri qiymat kiritingiz.");
// }

// //===============================================

// data % 2 === 1
//  ? console.log("toq son")
//  : data % 2 === 0 
//  ? console.log("juft son")
//  : console.log("Siz notogri qiymat kiritingiz.");
 
//====================================

//for (start; condition; step){}
// for (let i = 1; i <= 10; i++){
//     console.log(i);
    
// }

// for (let i = 100; i>=1; i--){
//     console.log(i);
    
//}
// for (let i = 1;i <= 10 ; i++){    
//     if (i % 2) {
//         console.log(i, "toq son");
//     }
//     else {
//         console.log(i, "juft son");
//     }
// }

//  // 1. continue
//  for (let i = 1; i <=10; i++){
//     if (i === 5 || i ===6) continue;
//     console.log(i);
//  }

//  // 2. Break 

//  for (let i = 1; i <=10; i++){
//     if (i === 5 ) break;
//     console.log(i);
//  }
let sum1 = 0
let sum2 = 0

for (let i = 1;i <= 10 ; i++){
 if (i % 2){sum1 = sum1 + i}
 else {sum2 = sum2 + i}
}
console.log(sum1, "toq son");
console.log(sum2, "juft son");


