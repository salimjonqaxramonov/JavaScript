let data = prompt("Xoxlaganingizni kiriting");

if (
  data === "nexia" ||
  data === "Damas" ||
  data === "kobalt" ||
  data === "spark" ||
  data === "matiz" ||
  data === "onix" ||
  data === "treker" ||
  data === "tiko" ||
  data === "monza"
) {
  console.log("Bu mashina JM avto salonida ishlab chiqarilgan");
} else if (
  data === "M5" ||
  data === "E30" ||
  data === "E46" ||
  data === "X5" ||
  data === "507"
) {
  console.log("Bu moshina BMW avtosalonida ishlab chiqarilgan");
} else if (
  data === "300 SL" ||
  data === "SLS AMG" ||
  data === "190 SL" ||
  data === "500 E"
) {
  console.log("Bu avtomabil Mercedes Benz avtosalonida ishlab chiqarilga ");
} else if (
  data === "Tesla modeli X" ||
  data === "cybertrack" ||
  data === "Tesla modeli 3" ||
  data === "Tesla modeli S"
) {
  console.log("Bu avtomabil Tesla avosalonida ishlab chiqarilga");
} else if (
  data === "Osh" ||
  data === "Mastava" ||
  data === "Shorva" ||
  data === "Lagman" ||
  data === "chuchvara" ||
  data === "somsa"
) {
  console.log("Bu ovqat O'zbek milliy taomi");
} else if (
  data === "Lavash" ||
  data === "danar" ||
  data === "pizza" ||
  data === "Rolton" ||
  data === "hoy-dog" ||
  data === "chizburger" ||
  data === "gamburger"
) {
  console.log("Bu taomlar Fast Foodga kiradi");
} else if (
  data === "bishteks" ||
  data === "Sushi" ||
  (data === "gizitzot") | (data === "spagetti")
) {
  console.log("Bu ovqatlar chet'el ovqatlari");
} else if (data >= 3 && data <= 6) {
  console.log("Bogcha oraligi");
} else if (data >= 7 && data <= 17) {
  console.log("maktab oraliq");
} else if (data >= 18 && data <= 30) {
  console.log("universitet oraliq");
} else if (data >= 31 && data <= 59) {
  console.log("ishlaydi");
} else if (data >= 60) {
  console.log("nafaqa oladi");
} else if (data >= 101) {
  console.log("O'lgan odamni bezovta qilmang");
} else if (data <= 2) {
  console.log("chaqaloq");
} else {
  console.log("bu narsa haqida malumotim yoq");
}
