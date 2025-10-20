let name1 = "Ali"
let name2 = "Ali"

console.log(name1 === name2);

let obj1 ={
    name: "Eshmat",
    age: 20
};
let obj2 ={
    name: "Eshmat",
    age: 20
};

console.log(obj1 === obj2);

// js xotirasi 2ga bolinadi 

//  1. call stack primetivelar togridan togri tushad

//  2. heep noneprimetivelar  call stackdan link olb keladi

// 2ta primetivelarni taqoslasa teng chiqadi lekin noneprimetivelarni taqoslasa

// linklar taqoslanadi ya'ni hech bir link taqoslanmaydi.

// Function

// 1.
function xisobla1(param1, param2) {
    console.log(param1, param2);
}

xisobla1(5, 10);
xisobla1(2, 10);

// 2.
let xisobla2 = function (){
    console.log(100-20);
};

xisobla2();

// 3.
let xisobla3 = () => {
    console.log(10*10);
};

xisobla3();
