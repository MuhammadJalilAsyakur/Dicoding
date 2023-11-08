// console.log("hell0 World");

// let myName = "Kimak";

// console.log(`Hallo My Name ${myName}`);

// for(let i = 1; i < 9; i +=2 ){
//     console.log(i);
// }


// let score = 81;
// if(score > 100){
//     console.log("Your score is great");
// }else if(score >= 80){
//     console.log("Your score is suucks");
// }else if(score >= 60){
//     console.log("Your score is good");
// }


// const profile ={
//     Firstname :"Hallo",
//     Lastname : "World",
//     age : 20,
// }

// let Firstname ="Jalil";
// let Lastname ="asyakur";

// ({Firstname,Lastname} = profile);

// console.log(Firstname);
// console.log(Lastname);

// const myMap = new Map(
//     [
//         ["name", "Kimak"],
//         ["age", 20],
//         [true,true]
//     ]
// );

// console.log(myMap);
// console.log(myMap.get("name"));
// console.log(myMap.size);


// myMap.set(1,"hyakur");
// console.log(myMap.get(1));
// console.log(myMap.size);

// console.log(myMap.has(1));


// const restaurant ={
//     name : "Bakso Mang Dicoding",
//     city : "Bandung",
//     favoriteDrink : "Bakso",
//     favoriteFood : 2,
//     isVegan : false,
// }

// let name = restaurant.name;
// let favoriteDrink = restaurant.favoriteDrink;

// console.log(name);
// console.log(restaurant);



// membuat bilangan genap dengan array dari 1 sampe 100
// const number =[];

// for(let i = 1; i < 100; i++){
//     if(i % 2 == 0){
//     number.push(i);
// }
// }

// console.log(number);

// const currency = new Map(
//     [
//         ["USD", 14000],
//         ["JPY", 131],
//         ["SGD", 11000],
//         ["MYR", 3500],
//     ]
// );

// const priceInJPY = 5000;

// let priceInINDR = currency.get("JPY") * priceInJPY;

// console.log(priceInINDR);


// function multiply(a, b) {
//     if (a < b){
//         return a;
//     } else if (a > b){
//         return  b;
//     }else{
//         return  b;
//     }

// };

// console.log (multiply(10,8));

// function power(c,d){
//     return c ** d;
// }

// console.log(power(4,3));


// function exponentFormula(baseNumber,exponent){
//     const result = baseNumber ** exponent;
//     console.log (`${result} ^ ${exponent}= ${result}`);
// }

// exponentFormula(2,3);




// function multiply(num) {
//     total = num * num;
// }

// const result = multiply(3);

// console.log(result);

// function calculate(value) {
//     return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
// }

// console.log(calculate(3));



// class car{
//     constructor(nama,brand,color,maxSpeed,chassisNumber) {
//         this.nama = nama;
//         this.brand = brand;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this.chassisNumber = chassisNumber;
//     }


//     Drive () {
//         console.log(`${this.nama} Driving ${this.brand} with ${this.maxSpeed} and ${this.chassisNumber}`);
//     }

//     get chassisNumber(){
//         return this.chassisNumber;
//     }
//     set chassisNumber(chassisNumber){
//         console.log("chassisNumber")
//         }
// }

// const myCar = new car("Varane","Toyota", "Blue", 200, 4);
// const urCar = new car("licha","Ferrari", "Red", 299, 7);
// const ryan = new car("ryan gosling","Ferrari","blue", 299,8);


// console.log(myCar);
// console.log(urCar);
// console.log(ryan);

// myCar.Drive();
// urCar.Drive();
// ryan.Drive();

// class Fak{};

// console.log(typeof Fak);

// let @usernam{}

// Superclass
// class car{
//     constructor(nama) {
//         this.nama = nama;
//     }


//     drive (brand,color){
//         console.log(`${this.nama} Driving ${brand} with ${color}`);
//     }
// }
// // Subclass
// class Sport extends car{
//     racing(brands,color){
//     for (const brand of brands)
//     this.drive(brand,color);
//     }
// }

// const formula1 = new Sport('charles');

// formula1.drive('Ferrari','red');
// formula1.racing(['red bull','mclaren'],'blue');




// class MailService {
//     constructor(sender) {
//     this.sender = sender;
//     }

//     sendMessage(message, receiver) {
//         console.log(`${this.sender} sent ${message} to ${receiver}`);
//     }
// }

//   // Subclass
// class WhatsAppService extends MailService {
//     sendBroadcastMessage(message, receivers) {
//         for (const receiver of receivers) {
//         this.sendMessage(message, receiver);
//         }
//     }
// }


// const whatsapp = new WhatsAppService('Kimak');


// whatsapp.sendMessage('Hello', 'Bngst');
// whatsapp.sendBroadcastMessage('Hello', ['Kimak', 'Bngst']);

// const date = new Date();

// const timeInJakarta = date.toLocaleDateString('id-ID' ,{
//     timeZone: 'Asia/Jakarta',
// });

// const timeInLondon = date.toLocaleDateString('id-ID' ,{
//     timeZone: 'Europe/London',
// });

// console.log(timeInLondon);
// console.log(timeInJakarta);


// class animal {
//     constructor(name,age,isMammal){
//         this.name = name;
//         this.age = age;
//         this.isMammal = isMammal;
//     }
// }


// class rabbit extends animal{
//     constructor(name,age,isMammal) {
//         super(name,age,isMammal);
//         this.isMammal = true;
//     }
//     eat(){
//         console.log(`Kelinci ku yang bernama ${this.name} sedang makan!. Dia masih berumur ${this.age} tahun`);
//     }
// }

// class eagle extends animal{
//     constructor(name,age,isMammal) {
//         super(name,age,isMammal);
//         this.isMammal = false;
//     }
//     fly(){
//         console.log(`Burung ku yang ber umur ${this.age} sedang dan bernama ${this.name} sedang terbang!`);
//     }
// }


// const myRabbit = new rabbit('Labi',2);
// myRabbit.eat();
// const myEagle = new eagle('Elo',4);
// myEagle.fly();


// class Formula1{
//     constructor(name,brand,track){
//         this.name = name;
//         this.brand = brand;
//         this.track = track;
//     }
// }


// class ferrari extends Formula1{
//     constructor(name,brand,track) {
//         super(name,brand,track);
//     }
//     racing(){
//         console.log(`${this.name} driving ${this.brand} in ${this.track}`);
//     }
// }

// class redbull extends Formula1{
//     constructor(name,brand,track) {
//         super(name,brand,track);
//         }
//     racing(){
//         console.log(`${this.name} driving ${this.brand} in ${this.track}`);
//     }
// }


// const charles = new ferrari('charles','ferarri','imola');
// charles.racing();
// const vers = new redbull('Max verstappen','redbull','Vandzoort');
// vers.racing();

// immutability
// const brand = {
//     name: 'Ferari',
//     color: 'Red',
//     price: 100000,
// }

// const renameBrandName = (newBrand,brand) =>{
//     return {...brand, name: newBrand}
// }

// const newBrand = renameBrandName('ferrari', brand);
// console.log(newBrand);
// console.log(brand);


// const createCarWithBrand = (car, brand) =>{
//     return {...car,brand};
// };

// const car ={
//     name: 'RB19'
// }

// const newName = createCarWithBrand(car, 'Red Bull');

// console.log({
//     car,
//     newName
// });

// const books = [
//     { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
//     { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
//     { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
//     { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
//     { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
//     { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
//     { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
// ];

// // TODO
// const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => {
//     return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`;
// });

// console.log(greatAuthors);

const motogp = [
    {
        constructor: 'Ducati',
        driver: 'Pecco',
        point: 416
    },
    {
        constructor: 'KTM',
        driver: 'Brad Binder',
        point: 234
    },
    {
        constructor: 'Aprilia',
        driver: 'Aleix',
        point: 218
    },
    {
        constructor: 'Honda',
        driver: 'Marquez',
        point: 105
    },
    {
        constructor: 'Yamaha',
        driver: 'Taro',
        point: 105
    },
];


const findPoint = motogp.find((moto) => moto.point === 105);
console.log(findPoint);

console.log("================================================")

const filterPoint = motogp.filter((motos) => motos.point === 105);
console.log(filterPoint[1].driver);


// const totalPoint = motogp.reduce((acc, moto) => acc + moto.point, 0);
// console.log(totalPoint);

const winner = motogp.filter((moto) => moto.point > 300).map((moto) => {
    return `${moto.constructor} dengan point ${moto.point} adalah juara tahun ini bersama ${moto.driver}`;
});
console.log(winner);


let kendaraan = {
    nama: "ferarri",
    warna: "merah",

}


// let day = "minggu"
// day = 'sabtu'
// if (day === "sabtu" || day === "minggu") {
//     console.log("Enjoy the weekend");
// } else {
//     console.log("Do some work!");
// }


// let fruits = ["Mangga", "Pisang", "Jambu"];

// fruits.splice(2, 0, "Semangka");

// console.log(fruits);

// const browser = "firefox";

// switch (browser) {
//     case "edge":
//         console.log("Browser Anda tidak mendukung aplikasi ini");
//         break;
//     case "chrome":
//     case "firefox":
//     case "safari":
//         console.log("Browser Anda mendukung aplikasi ini");
//         break;
//     default:
//         console.log("Semoga tampilan aplikasi ini cukup baik");
// }

// console.log(browser);


// let angka = [1, 46, 75, 12, 89, 54, 101];
// let ganjil = [];



// for (let angkaItem of angka) {
//     if (angkaItem % 2 !== 0) {
//         ganjil.push(angkaItem);
//     }
// }

// console.log(ganjil);

// let demo = document.getElementById("demo");
// demo.onclick = showMessageBox;

// function showMessageBox() {
//     prompt("HALLLOO BANGST")
//     if (showMessageBox = "kontol") {
//         alert("KASAR NGENTOT");
//     } else {
//         alert("SELAMAT DATANG");
//     }
// }

// const lambuLaluLinta = (lampu) => {
//     if (lampu === "Hijau") {
//         console.log("jalan");
//     } else if (lampu === "kuning") {
//         console.log("Hati hati");
//     } else if (lampu === "merah") {
//         console.log("berhenti");
//     }
// }

// console.log(lambuLaluLinta("merah"));

// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= 5 - i; j++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//     }
//     console.log(row);
// }

// const n = 5; // Ubah nilai n sesuai dengan jumlah baris yang diinginkan

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     console.log(row);
// }

// for (let i = n - 1; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     console.log(row);
// }

// const n = 5; // Ubah nilai n sesuai dengan jumlah baris yang diinginkan

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//     }
//     console.log(row);
// }

// const myArray = [0, 1, 2,];
// myArray.push(3);
// myArray.pop();

// console.log(myArray);