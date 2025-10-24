// && - and - va 

// (Bu operator faqat false ni qidiradi)

// console.log(true && false); = false

// ==============================================

//< ! >- not - inkor 

// console.log(!0);  = true  

// (bu belgi true ni false false ni true qilib beradi)

// -----------------------------------------------

// ?? - nullish 
// null va undefined dan tashqari hamma malumotni true deb biladi va bu operator true ni qidiradi 
// console.log(null ?? false);  = false

// ===========================================================================


// if , else , else if

// buni biz saytlarda tekshiruv uchun ishlatamiz
//  masalan odamning yoshi 18 yoki 18 dan katta bolsa kirishga ruxsat beradi


// let age = prompt("Yoshingizni kiriting")

// if (age >= 18){
// console.log("ruxsat");
// } else{
//     console.log("mumkin emas");
// }
 

// 1. boqchada oqiydi age >=3 && <=6

// 2. Maktabda oqiydi

// 3. uneversitetda oqiydi >=18 && <=30

// 4. ishlaydi

// 5. Nafaqa oladi

let age = prompt("Yoshingizni kiriting")

if (age >= 3 && age <= 6) {
   console.log( "Bogcha oraligi");   
}
else if(age >= 7 && age <= 17){
    console.log("maktab oraliq");    
}
else if(age >= 18 && age <= 30){
    console.log("universitet oraliq");
}
else if(age >= 31 && age <= 59){
    console.log("ishlaydi");
    
}
else if(age >= 60){
    console.log("nafaqa oladi");
    
}
else if(age >= 101)
{console.log("O'lgan odamni bezovta qilmang");
}
else{
    console.log("chaqaloq");
}
