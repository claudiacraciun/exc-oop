// var square = function (a) {
//   return (document.getElementsByClassName("title")[0].textContent = a);
// };
// square("test"); // este in loc de console.log. Nu mai apare in console, ci in pagina,  adica nu treb sa mai dai console.log

// document.getElementsByClassName('title')(am selectat din documentul nostru clasa numita "title" din html si mentionam pozitia din array pe care vrem sa o schimbam [0].textContent = square;
// document.getElementsByClassName -> returneaza un array.
// https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

// console.log(document.getElementsByClassName("title"));

// // var a = 7;
// // console.log(a);

// var book ={
//     title: "Carte frumoasa",
//     author: "Joe Doe",
//     pages: 500,
//     isAvailable: false,
//     chapter: [1,2,3,4,5],
//     message: function (){
//         console.log(`Titlul acestei carti este: ${this.title}, scrisa de , ${this.author},
//         si are , ${this.pages},  pagini.Aceasta carte are , ${this.chapter.length}, capitole, 5'oclock`);
//     },
//     history: {
//         launchYear: 2000,
//         nrCoppies: 10000,
//     },
//     message2: function(){
//         console.log(`Titlul acestei carti este: ${this.title}, scrisa de , ${this.author},
//         si are , ${this.pages},  pagini.Aceasta carte are , ${this.chapter.length}, capitole, 5'oclock`);
//     }

// }

// square(book.title);
// var b=['claudia', "daniela"]
// console.log(b);
// console.log(b[0]);
//${this.title} - >modifica proprietatea cu valoarea propr.
//`Titlul acestei carti este: ${this.title}...` -> cu backticks

// console.log(book.title);
// console.log(book.chapter);
// console.log(book.chapter[2]);
// console.log(book.history);
// console.log(book.history.launchYear);
// console.log(book.history.nrCoppies);
// book.history.nrCoppies=2000; // se targheteaza ob. book, se navigheaza in prop. history ->ii reatribuim 2000 sau cum putem modifica in interiorul obiect.
// console.log(book);

// book.chapter[4]=10; // indicam al catelea elem sa il schimbe.
// console.log(book.chapter);

// book.message();

// console.log(book.author);

// book.message2();

// var book2 = {
//     title: "Film",
//     author: "Joe Doe",
//     pages: 500,
//     isAvailable: false,
//     chapter: [1,2,3,4,5],
//     message: function (){
//         console.log(`Titlul acestei carti este: ${this.title}, scrisa de , ${this.author},
//         si are , ${this.pages},  pagini.Aceasta carte are , ${this.chapter.length}, capitole, 5'oclock`);
//     },
//     history: {
//         launchYear: 2000,
//         nrCoppies: 10000,
//     },
//     message2: function(){
//         console.log(`Titlul acestei carti este: ${this.title}, scrisa de , ${this.author},
//         si are , ${this.pages},  pagini.Aceasta carte are , ${this.chapter.length}, capitole, 5 o'clock`);
//     }

// }

// var book3 = {
//     title: "Cartoon",
//     author: "Joe Doe",
//     pages: 500,
//     isAvailable: false,
//     chapter: [1,2,3,4,5],
//     message: function (){
//         console.log(`Titlul acestei carti este: ${this.title}, scrisa de , ${this.author},
//         si are , ${this.pages},  pagini.Aceasta carte are , ${this.chapter.length}, capitole, 5 o'clock`);
//     },
//     history: {
//         launchYear: 2000,
//         nrCoppies: 10000,
//     },
//     message2: function(){
//         console.log(`Titlul acestei carti este: ${this.title}, scrisa de , ${this.author},
//         si are , ${this.pages},  pagini.Aceasta carte are , ${this.chapter.length}, capitole, 5 o'clock`);
//     }

// }

// console.log(book2.title);
// book2.message2();

// Constructor
// function movie(title, releaseYear, cast) {
//     this.title=title;
//     this.releaseYear=releaseYear;
//     this.cast=cast;
//     this.show=function(){
//         return`Titlul acestei carti este: ${this.title}
//         released in ${this.releaseYear}`; //Ii spunem ce sa faca
//     }

// }

// var movie1 = new movie ("Titanic", 1997, ["Leonardo DiCaprio", "Kate Winslet"]);
// var movie2 = new movie("Avatar", 2008, ["Actor", "Actress"]);

// console.log("");
// console.log(movie1);
// console.log(movie2);
// movie1.show();
// movie2.show();

// // document.getElementsByClassName('title')[0].textContent=movie1.show(); -> am targhetat un document din html si am inlocuit textul lui cu valoarea care apare in consola.
// // console.log(movie1.show());

// //cum aratam ca movie face parte din movie1?
// // console.log(book3 instanceof movie); // book3 este o instanta a tipului sau a clasei movie.
// // console.log(movie2 instanceof Object);  //movie2 este o instanta a clasei Object care este clasa cea mai de baza (cum aveam la html DOCTYPE)

// //var movie3=Object.create(movie("Rocky", 2004, ["Stallone"])); // inlocuim parametrii cu valoari, iar cast este array de aceea am scris in paranteze drepte

//Functia contructor cu alta metoda cu documentatia, un fel de mostenire
////https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// // var song ={
// //     play: function(){
// //         console.log(this.title + " is played by " + this.artist);
// //     }
// // }

// // var song1=Object.create(song); // functia song e functia constructor
// // song1.title="Enter";
// // song1.artist="XXX";
// // song1.play(); //am chemat functia play

// //Principii OOP - Encapsulation

// var movie = function(newTitle, newDirector){
//     let title = newTitle;
//     let director = newDirector;
//     this.info=function(){
//         console.log(title + " by" + " director");
//     }
// }

// var movieX = new movie ("Harry Poter", "David Yeats");
// console.log(movieX.title,movieX.director); // rezultatul este "Undefined"
// movieX.info();

// am folosit let pentru a ascunde info. Apare rezult undefined pt ca let traieste in bloc.

// //Exc. Abstractizare
// console.log(11111111); // intre cele 2 este diferenta de culoare din cauza tipului de date: unul e string si altul e numar.
// console.log("111111");

//console.log('---------HOISTING--------');
// const readVariable = function () {
//     let a = "lipstick";
//         if (1 == 1) { //scop local
//         var v = "eyeliner"; // este function scope.
// let v = "eyeliner"; este block scope (acolade).
// document.querySelector("h1").textContent = `Valoarea lui a este ${a} si valoarea lui v este ${v}`;
// }
// const readVariable2 = function () {
//     var b = "blush";
//     return b;
// document.querySelector("h1").textContent = `Valoarea lui b este ${b}, iar valoarea lui v ${v}`;
// }
// const readVariable3 = function () {
//     var c = "mascara";
//     document.querySelector("h1").textContent = `Valoarea lui c este ${c}, iar valoarea lui b ${readVariable2()}`;
// }
// readVariable2();
// readVariable3();
// document.querySelector("h1").textContent = `Valoarea lui a este ${a} si valoarea lui v este ${v}`;

// }
// readVariable();
// readVariable2(); nu se poate accesa pentru ca este nested in readVariable function

// //Exc. Creati ob Car care sa aiba ca propr brand, speed, 2 metode- break, care scade cu 5 speed ul,
// //iar accelerate creste cu 2 speed ul.
// var car = {
//     brand: "Volvo",
//     speed: 300,
//     break: function(){
//         this.speed=this.speed - 5;
//     },
//     accelerate: function(){
//         this.speed=this.speed + 2;
//     }
// }

// car.break();
// car.break();
// car.break();
// console.log(car);

// //Exc. Creati o functie constructor pt crearea unui client
// function client(name, budget, confidenceLevel) {
//     this.name=name,
//     this.budget=budget,
//     this.confidenceLevel=confidenceLevel,
//     this.deposit=function(amount){
//         this.budget=this.budget + amount;
//         this.confidenceLevel=confidenceLevel + 1;
//     },
//     this.loan=function(amount){
//         if(this.confidenceLevel>3){
//             this.budget = this.budget - amount;
//         }else{
//             console.log("Din pacate imprumutul nu poate fi acordat");
//         }
//     }
// }

// var client1 = new client("Popescu", 2000, 1);
// var client2 = new client("Ionescu", 3000, 2);

// console.log(client1);
// console.log(client2);
// client1.deposit(50);
// // console.log(client1.budget);
// // console.log(client1.loan);
// client1.loan(80);

//  De pus o metoda pe client numita depozit() care sa faca 2 lucruri:
//1) increase la bugetul initial & 2) sa creasca nivelul de confidence cu 1.
//  De adaugat o a 2-a metoda pe client numita imprumut(XY) care sa faca 2 lucruri:
//1) daca nivelul de confidence>3 -> oferim posibilitatea sa scada bugetul
// cu param mentionat ;
// 2) daca nivelul de confidence < 3 => printam un mesaj care spune :
//"Din pacate imprumutul nu poate fi acordat".

// //exc. cu template pentru a crea obiecte Ecma6, cu Constructor si clase.
// class bike{
//     constructor(brand, speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
//     start = function(){
//         console.log("full speed");
//     }
// }

// var sorinBike = new bike("suzuki", 200);
// console.log(sorinBike.brand);
// //pentru a printa pe ecran mesajul "full speed", invocam functia start si aratam catre obiect
// sorinBike.start();
// console.log(sorinBike.brand); //pentru a printa brandul. brandul nu e functie, e proprietate.

//exc.
//ECMA6 does not have native support for encapsulation.
//All classes' fields are public by default.
//There are some ways we can create private fields, inaccessible from outside.
//we use var instead of this. we use underscore
//if we want a field to be accessed by some method
//we put it inside the constructor

// class transport{
//     constructor(newDestination, cargo, quantity){
//         let destination = newDestination; // e valab. doar in bloc.
//         var _cargo = cargo; // we use var instead of this. Se recomanda underscore pt a utiliza private fields sau properties.
//         this.quantity = quantity;
//         this.getDestination=function(){  // metoda "getter" ->incapsulare.
//             return destination;
//         },
//         this.getCargo=function(){  // if we want a field to be accessed by some method, we put it inside the constructor.
//             return _cargo;
//         }
//     }

// }

// var road = new transport("Paris", "sampanie", 100);
// var barge = new transport("Antwerp", "transformator", 1);
// var sea = new transport("Rotterdam", "steel", 200);

// console.log(road, barge, sea);
// console.log(road.destination);
// console.log(road.getDestination());
// console.log(road._cargo); // rezultat undefined in consola pt ca, cargo este scope doar pe functia de constructor, nu pe obiectul in sine, cum ar fi fost cu "this".
// console.log(road.getCargo()); // pt a avea acces la propriet. private trebuie sa folosin metode "getter".

//exc.
// const massageSorin=function (){
//     console.log("XXX");
// }
// massageSorin();

// //Arrow Function -> este acelasi lucru ca mai sus, dar scrisa mai pe scurt. Se folos arrow f. cand avem o linie de cod, max.2.
// const massageSorinArrow=() =>  console.log("XXX");
// massageSorinArrow();

// //Sa facem o functie

// const returnNumber=(x,y) =>{

//     return x>y ? x:y; // formula aceasta e aceeasi cu cea de mai jos de la if.
// Se numeste Ternary Operator.
//     // if(x>y){
//     //     return x;
//     // }else{
//     //     return y;
//     // }
// }

// console.log(returnNumber(3,10));

//Alt exc. cu arrow.

// const isPositive=function(nr){

//     // if(nr>=0){
//     //     console.log("is positive");
//     // }else{
//     //     console.log('is negative');
//     // }
//     nr>=0 ? console.log("is positive"):console.log('is negative');
// }

// isPositive(0);

//Default parameters values
//Exc. Chemam o functie cu 2 param. si cu un parametru care intra pe default.
// const game=function(score=7, player="Nadal"){
//     return `${player} has the score of ${score}`;
// }

// game(3,"Simona");
// consol.e.log(game(3,"Simona"));
// console.log(game(5,"Serena"));
// console.log(game(3));
// consolelog(game());

//Destructuring

// const music={
//     instrument:"orga",
//     artist: "Skillet",
//     isArt: true
// }

// console.log(music);
// console.log(`${music.instrument} este in instrument frumos. Niciun altinstrument nu se apropie de valoarea pe are o are ${music.instrument}. ${music.instrument} `);
// var{instrument, artist, isArt}= music;
// // dar nu e terminat codul, apoi s-a inlocuit ${music.instrument} cu ${instrument}

// // ${music.instrument} este orga
// // ${music.artist} este "skillet", artistul

// // apoi facem mai pe scurt cu var. cu un singur nume si inglobam toate proprietatile.

// // const music = {
// //     instrument: "orga",
// //     artist: "Skillet",
// //     isArt : true,
// // }
// // console.log(music);
// // const instrument = music.instrument;
// // const artist = music.artist;
// // var {instrument, artist, isArt} = music;
// // console.log(`${instrument} este un instrument frumos. Niciun alt instrument nu se apropie de valoarea pe care o are ${instrument}.
// // ${artist} canta la ${instrument}. ${instrument}, ${instrument}, ${instrument}! Ce dor mi-e de ${instrument}! `);

// //EXC. cu
// const device = {
//     type:{
//         isPhone: true,
//         color: "blue",
//         price:{
//             fullPrice: 100,
//             reducedPrice: 99,

//         }
//     },
//     isAvailable: true,
// }

// console.log(device);
// var {reducedPrice} = device.type.price;

// console.log(`Reduced price of the device is ${reducedPrice} `);

// // Mai jos este formula lunga, apoi o facem mai scurta cu var.
// console.log(`Reduced price of device is ${device.type.price.reducedPrice}`);

//Exc 
// 3 obiecte de travel folosind notatia class si constructor. Obiectele de tip travel sa aiba urmatoarele proprietati:
// Starting date: de tip string" "
// End date: de tip string ""
// IsInTarileCalde: de tip bolean
// Budget: number
// Destination: string""
// O metoda de tip arrow in cadrul obiectelor care sa se cheme Enjoy, care sa printeze in consola un mesaj "ceva funny"
// Ascundeti informatia de buget in cadrul obictelor.
// Extrageti din fiecare obiect in parte destinatia si o puneti intr-o variabila seaparata

// class travel{
//     constructor(StartingDate, EndDate, IsInTarileCalde, budget, Destination){
//         this.StartingDate=StartingDate;
//         this.EndDate=EndDate;
//         this.IsInTarileCalde=IsInTarileCalde;
//         let _budget= budget;
//              this.getbudget=function(){
//                  return _budget;
//         },
//         this.Destination=Destination;

//     }
//     enjoy=() => console.log("Ceva funny")

// }

// var holiday=new travel("Monday", "Friday", true, 1000, "Thailand");
// var vacation=new travel("Monday", "Friday", true, 2000, "Egipt");
// var trip=new travel("Monday", "Friday", false, 1500, "Alaska");

// console.log(holiday, vacation, trip);
// console.log(holiday.getbudget());

// holiday.enjoy();
// var{Destination:hol} = holiday;
// console.log(hol);

// var{Destination:eg} = vacation;
// console.log(eg);

// var{Destination:al} = trip;
// console.log(al);

// console.log(hol,eg,al);

//// const massageSorinArrow=() =>  console.log("XXX");
// massageSorin();

//   class transport{
//             constructor(newDestination, cargo, quantity){
//                 let destination = newDestination; // e valab. doar in bloc.
//                 var _cargo = cargo; // Se recomanda underscore pt a utiliza private filds sau properties.
//                 this.quantity = quantity;
//                 this.getDestination=function(){  // metoda "getter" ->incapsulare
//                     return destination;
//                 },
//                 this.getCargo=function(){
//                     return _cargo;
//                 }
//             }

//         }

//         var road = new transport("Paris", "sampanie", 100);
//         var barge = new transport("Antwerp", "transformator", 1);
//         var sea = new transport("Rotterdam", "steel", 200);

//         console.log(road, barge, sea);
//         console.log(road.destination);
//         console.log(road.getDestination());
//         console.log(road._cargo); // rezultat undefined in consola pt ca, cargo este scope doar pe functia de constructor, nu pe obiectul in sine, cum ar fi fost cu "this".
//         console.log(road.getCargo()); // pt a avea acces la propriet. private trebuie sa folosin metode "getter".



// Ex 1 : Create 4 objects by instantiating the class cityBreak. The class cityBreak should have the following properties:
// Name (string)
// Country(string)
// Cost(number)
// isIsland(boolean)
// Also, each object should have the following methods:
// sayHello -> arrow function that displays in the console how it is “Hello” translated in the official language in that city (Salut, Hello, Hallo, Hola etc ); an internal check should be done to decide how the word will be translated
// dayTrip -> non-arrow method that increases the cost of the trip by 25%;

// class cityBreak {
//   constructor(name, country, cost, isIsland) {
//     this.name = name;
//     this.country = country;
//     this.cost = cost;
//     this.isIsland = isIsland;
//     this.sayHello = () => {
//       //met. arrow (am sters function din fata parantezelor)
//       //  this.sayHello = function()
//       var salut;
//       switch (this.country) {
//         case "Franta":
//           salut = "Bonjour!";
//           break;
//         case "Romania":
//           salut = "Salut!";
//           break;
//         case "Italia":
//           salut = "Ciao!";
//         case "Spania":
//           salut = "Hola!";
//         default:
//           salut = "Hello, in orice limba!";
//           break;
//       }
//       return salut;
//     };
//     this.enjoy = () =>
//       this.isIsland === true
//         ? console.log(
//             `Tsunami is a very rare occurrence in the nature, we should just enjoy our stay in ${this.name}, because we payed ${this.cost}`
//           )
//         : console.log(
//             `${this.name} is a beautiful city and because it is not an island, I do not have to fear tsunami`
//           );

//     this.dayTrip = function () {
//       console.log((this.cost += this.cost * 0.25)); // metod. non-arrow (am pus function in fata paran)
//     };
//   }
//   //dayTrip = () => console.log(this.cost + this.cost * 0.25); // nu merge cu this in afara
// }
// var vacanta = new cityBreak("Paris", "Franta", 100, false);
// console.log(vacanta.sayHello());
// console.log(vacanta.cost);
// vacanta.dayTrip();
//console.log(vacanta1.sayHello()); //aduce default pt ca nu i-am alocat un parametru.
//console.log(vacanta1.sayHello("Spania")); //nu va folosi valoarea obiect. vacanta1, adica Romania, pentru ca se suprascrie cu Spania. Am apelat functia pt obiect. 1

// Exc:
// create a function that receives 4 objects as parameters, captures each of their name variables and returns a string like : “Life is beautiful and you should take the time to discover the world: visit : London, Paris, Berlin and Punta Cana – these 4 destinations are the best in the world!”

// var vacanta1 = new cityBreak("Sibiu", "Romania", 50, false);
// console.log(vacanta1);
// console.log(cityBreak);

// var vacanta2 = new cityBreak("Venetia", "Italia", 89, false); // Acesta e obiectul construit vacanta, care se construieste cu keywordul new.
// var vacanta3 = new cityBreak("Mosta", "Malta", 110, true);

// function life(vacanta, vacanta1, vacanta2, vacanta3) {
//     console.log(`Life is beautiful and you should take the time to discover the world: visit : ${vacanta.name}, ${vacanta1.name}, ${vacanta2.name} and ${vacanta3.name} these 4 destinations are the best in the world!`);
// }
// life(vacanta, vacanta1, vacanta2, vacanta3);

// Create an external function to all the 4 objects that will decrease the budget for the object that we pass it, by the amount we pass to the function. Make the amount a default parameter with a value of 100.
// function budgetCuts(destinatie, amount = 100 ){
//     switch (destinatie) {
//         case vacanta:
//            console.log(vacanta.cost = vacanta.cost - amount);
//             break;
//         case vacanta1:
//             console.log(vacanta1.cost = vacanta1.cost - amount);
//             break;
//         case vacanta2:
//             console.log(vacanta2.cost = vacanta2.cost - amount);
//             break;
//         case vacanta3:
//             console.log(vacanta3.cost = vacanta3.cost - amount);
//             break;
//     }
// }
// budgetCuts(vacanta3, 50);

// vacanta.enjoy();
// vacanta1.enjoy();
// vacanta2.enjoy();
// vacanta3.enjoy();

//Implement any type of feature (inside the class or outside) that counts how many objects have been created that are in Europe(use the map if you want to be 100% ok with geography or else use very well know cities around the world )
// var europeCountry = ["Albania","Andorra","Anglia","Franta", "Romania", "Spania","Italia", "Malta"];
// var nrOfCountries = [];
// function europe(vacanta){
//     // var nrOfCountries = [];
//     for(var i=0; i<europeCountry.length; i++){
//         if(vacanta.country == europeCountry[i]){
//             nrOfCountries.push(vacanta.country);
//         }
//     }
//     return nrOfCountries;
// }
// console.log(europeCountry.length);
// console.log(europe(vacanta));
// console.log(europe(vacanta1));
// console.log(europe(vacanta2));
// console.log(europe(vacanta3));
// console.log(europe(vacanta4));
// console.log(europe(vacanta5));

// function prim(x){
//     var p = true;
//     for(i=2; i<x; i++){
//         if(x%i===0){
//             p=false;
//         }
//         return p;
//     }

// }

// console.log(prim(6));

// /*

// nr = 11
// 2->10

// prim(x) -> returneaza true/false
// verificaPrim(ar) -> returneaza un alt array care contine doar numerel prime din ar

// arr = [3, 6, 7, 9, 11]
// verificaPrim(arr) -> [3, 7, 11]

// */

// var arr=[];
// function verificaPrim(arr){
//     var arrPrim = [];
//     for(var i=0; i<arr.length; i++){
//         if(prim(arr[i])==true){
//             arrPrim.push(arr[i]);
//         }
//     }
//     return arrPrim;
// }
// arr=[3, 6, 7, 11];
// console.log(verificaPrim(arr));


//.ES 5 - cum cream un obiect in ES5, instantierea unei clase

// function dogsES5(breed, size) {
//     this.breed = breed;
//     this.size = size;
//     this.sound = function () {
//         return `bark`;
//     }
// }

// //ES.6 - cum cream un obiect in ES6, instantierea unei clase: cu keyword-urile class si constructor
// class dogsES6 {
//     constructor(breed, size) {
//         var _breed = breed;
//         this.size = size;
//         // this.getSize = () => size; //face return automat daca avem o singura instructiune
//         this.getBreed = function () {
//             return _breed;
//         }
//          this.setSize = function () {
//             this.size = `big`;
//         }  // se cheama setter

//     }
//     sound = function () {
//         return `bark`;
//     }
// }

// // instantierea unei clase = crearea unui obiect
// var dog1 = new dogsES5(`Pug`, `small`);
// var dog2 = new dogsES6(`Bulldog`, `small`);

// console.log(dog2);
// console.log(dog1);

// console.log(dog1 instanceof dogsES6);
// console.log(dog2 instanceof dogsES6);

// console.log(dog2.getSize());
// console.log(dog2.getBreed());
// dog2.setSize();
// console.log(dog2.size);
// console.log(dog2._breed);
// //cum verificam daca apartine...cu instanceof

// //

// class Water {
//     constructor(purity, color) {
//         this.purity = purity;
//         this.color = color;

//     }
// }

// var danube = new Water("clean", "blue");
// var prut = new Water("translucent", "aquamarine");
// console.log(danube);
// console.log(prut);

// //tip de data undefined
// var tryMe;
// console.log(tryMe);

//Arrow function
// o functie arrow func. care returneaza Hola;

//inainte func. arrow care sa returneze a+b;
// function suma(a, b) {
//     return a + b;
// }
// console.log(suma(3, 5));
// const sum=() =>  console.log(3,5);

// const sayHello = (country) =>  // aceasta e functia arrow cu if
// {
//     if (country === "Spain") {
//         console.log("Hola");
//     } else {
//         console.log("No capisco!")
//     }
// }
// sayHello("France");

// ///acum varianta cu arrow
// const sayHelloternary = (country) => country === `Spain` ? console.log(`Hola`) : console.log(`Nu e Spania`);
// const sayHelloternaryshort = (country) => console.log(`${country === `Spain` ? `Hola` : `Nu e Spania`}`); //acum varianta scurta cu arrow si ternary in care folosim doar 1 console.log
// //nr >= 0 ? console.log("It's positive!") : console.log("It's negative!"); //ternary operator
// //sayHello(`Spain`);
// sayHelloternary(`Italy`);
// //simple function
// sayHelloternaryshort(`Spain`);

// //Default parameters values

// // const exam = (university, course) => console.log(`I passed the ${course} from ${university}`);
// // const exam = (university="Harvard", course) => console.log(`I passed the ${course} from ${university}`);

// // exam("Politehnica", "javascript");
// // exam("ASE", "Finante");
// // exam("OOP"); //Rezultatul in consola este "I passed the undefined from OOP" pt ca nu i-am dat al 2 lea param.

// //sau
// const exam = (name, university="Harvard", course) => console.log(`${name} passed the ${course} from ${university}`);
// exam("Geanina", "Oxford","History"); // Rezultatul in consola este: Geanina passed the History from Oxford
// //de testat cu 2 parametri, cu 1: exam();

// //recap destructuring
// const art = {
//     artist: `Picasso`,
//     value: 3000,
//     date: `1930`,
//     materials: [`canvas`,`colors`,`brushes`],
//     mentor: {
//         fisrtName:`Salvador`,
//         lastName:`Dali`,
//     }
// }

// console.log(art);

// var {artist, value, date, materials} = art;
// console.log(artist);
// //acelasi lucru cu
// //console.log(art.artist);
// console.log(value, date, materials);
// var colors = materials[1];
// console.log(colors);

// var {fisrtName} = art.mentor;
// console.log(fisrtName);

// const art2 = {
//     artist: `2Picasso`,
//     value: 23000,
//     date: `21930`,
//     materials: [`2canvas`,`2colors`,`2brushes`],
//     mentor: {
//         fisrtName:`2Salvador`,
//         lastName:`2Dali`,
//     }
// }

// var {fisrtName:updated} = art2.mentor;//dupa : oferim alias
// console.log(fisrtName);
// console.log(updated);

// Exc.:

// class cityBreak {
//   constructor(name, country, cost, isIsland) {
//     this.name = name;
//     this.country = country;
//     this.cost = cost;
//     this.isIsland = isIsland;
//     this.sayHello = () => {
//       var salut;
//       switch (this.country) {
//         case "Franta":
//           salut = "Bounjour!";
//           break;
//         case "Romania":
//           salut = "Salutare!";
//           break;
//         case "Italia":
//           salut = "Ciao!";
//           break;
//         case "Spania":
//           salut = "Hola!";
//           break;
//         default:
//           salut = "Hello in orice limba!";
//           break;
//       }
//       return salut;
//     };
//     this.enjoy = () =>
//       this.isIsland === true
//         ? console.log(
//             `Tsunami is a very rare occurrence in the nature, we should just enjoy our stay in ${this.name}, because we payed ${this.cost} euro.`
//           )
//         : console.log(
//             `${this.name} is a beautiful city and because it is not an island, I do not have to fear tsunami`
//           );
    // in JavaScript
    // this.dayTrip = () => console.log(this.cost += this.cost * 0.25);
    // this.cheCkcost = function () {
      // punctul cu method that adds a new field to the object; check if the cost is above 2000; if it is then add the field isExpensive and put the value true; else do not add the field at all;
    //   if (this.cost > 2000) {
    //     this.isExpensive = true;
    //   }
    // };
    // this.cheCkcost();
//   }
//   sayHello = () => {
//     var salut;
//     switch (this.country) {
//       case "Franta":
//         salut = "Bounjour!";
//         break;
//       case "Romania":
//         salut = "Salutare!";
//         break;
//       case "Italia":
//         salut = "Ciao!";
//         break;
//       case "Spania":
//         salut = "Hola!";
//         break;
//       default:
//         salut = "Hello in orice limba!";
//         break;
//     }
//     return salut;
//   };
//   dayTrip = () => console.log((this.cost += this.cost * 0.25));
// }
// var vacanta = new cityBreak("Paris", "Franta", 100, 3);
// truthey sau folsy values :
//I truthey: true, string, number;
//II folsy: false, 0, empty string "", NaN, undefined, null;
// console.log(`--------------check Say Hello------------------`);
// console.log(vacanta.sayHello());
// console.log(`--------------check Say Hello------------------`);

// console.log(vacanta.cost);
// vacanta.dayTrip();
// vacanta.dayTrip();
// console.log(
//   `valoarea initiala era 100, iar dupa 1 daytrip este ${vacanta.cost}`
// );

// var vacanta1 = new cityBreak("Sibiu", "Romania", 50, false);
// var vacanta2 = new cityBreak("Venetia", "Italia", 89, false);
// var vacanta3 = new cityBreak("Mosta", "Malta", 3000, true);
// console.log(vacanta3);
// //vacanta3.checkCost();
// var vacanta4 = new cityBreak("Barcelona", "Spania", 180, true);
// var vacanta5 = new cityBreak("Bagdad", "Irak", 180, true);

// console.log(vacanta1.sayHello());
// console.log(vacanta5.sayHello());

// // EXc.:

// // create a function that receives 4 objects as parameters, captures each of their name variables and returns a string
// // like : "Life is beautiful and you should take the time to discover the world: visit : London, Paris, Berlin and Punta Cana – these 4 destinations are the best in the world!"
// // Use this function with the 4 objects created.

// function life(vacanta, vacanta1, vacanta2, vacanta3) {
//     var {name} = vacanta;
//     var {name:name1} = vacanta1;
//     var {name:name2} = vacanta2;
//     var {name:name3} = vacanta3;
//     console.log("----------- functia cu 4 obiecte ca si parametrii-------");
//     console.log(`Life is beautiful and you should take the time to discover the world: visit : ${name}, ${name1}, ${name2} and ${name3}, these 4 destinations are the best in the world!`);
// }

// life(vacanta, vacanta1, vacanta2, vacanta4);
// life(vacanta1, vacanta3, vacanta, vacanta2);

// // Create an external function to all the 4 objects that will decrease the budget for the object that we pass it, by the amount we pass to the function. Make the amount a default parameter with a value of 100.
// console.log("-------------------reducerea bugetului--------");
// console.log("-------------------reducerea bugetului--------");
// console.log("-------------------reducerea bugetului--------");
// console.log(vacanta3.cost);
// function budgetCuts(destinatie, amount = 100) {
//     return destinatie.cost = destinatie.cost - amount;
//     // switch (destinatie) {
//     //     case vacanta:
//     //         console.log(vacanta.cost = vacanta.cost - amount);
//     //         break;
//     //     case vacanta1:
//     //         console.log(vacanta1.cost = vacanta1.cost - amount);
//     //         break;
//     //     case vacanta2:
//     //         console.log(vacanta2.cost = vacanta2.cost - amount);
//     //         break;
//     //     case vacanta3:
//     //         console.log(vacanta3.cost = vacanta3.cost - amount);
//     //         break;
//     // }
// }
// budgetCuts(vacanta3,5);
// console.log(vacanta3.cost);
// budgetCuts(vacanta3,10);
// console.log(vacanta3.cost);

// console.log(`--------------check enjoy------------------`);
// vacanta.enjoy();
// vacanta1.enjoy();
// vacanta2.enjoy();
// vacanta3.enjoy();
// console.log(`--------------check enjoy------------------`);


//Implement any type of feature (inside the class or outside) that counts 
//how many objects have been created that are in Europ
//(use the map if you want to be 100% ok with geography or else use very well
// know cities around the world )

// var europeCountry = ["Albania", "Andorra", "Anglia", "Franta", "Romania", "Spania", "Italia", "Malta"];
// var nrOfCountries = [];
// function europe(vacanta) {
//     // var nrOfCountries = [];
//     for (var i = 0; i < europeCountry.length; i++) {
//         if (vacanta.country == europeCountry[i]) {
//             nrOfCountries.push(vacanta.country);
//         }
//     }
//     return nrOfCountries;
// }
// console.log("------------tari din europa-------------");
// console.log(europeCountry.length);
// console.log(europe(vacanta));
// console.log(europe(vacanta1));
// console.log(europe(vacanta2));
// console.log(europe(vacanta3));
// console.log(europe(vacanta4));
// console.log(europe(vacanta5));
// console.log("------------tari din europa-------------");

//-----------Tema rezolvata la curs -------------

// Inheritance--------------------------------------- //

// console.log("-----------Difference in inheritance------------");
//cu ES 5.
//exemplu //.ES 5
//Clase

// function dogsES5(breed, size) {
//     this.breed = breed;
//     this.size = size;
//     this.sound = function () {
//         return `bark`;
//     }
// }

// function animalES5(name, fur, nutrition, weight) {
//   this.name = name;
//   this.fur = fur;
//   this.nutrition = nutrition;
//   this.weight = weight;
//   this.description = function () {
//     console.log(
//       `I am a ${name}, my nutrition is ${nutrition}, I weigh ${weight} kg.`
//     );
//   };
// }

// class animalES6 {
//     constructor(name, fur, nutrition, weight) {
//         this.name = name;
//         this.fur = fur;
//         this.nutrition = nutrition;
//         this.weight = weight;
//         // this.description = function () {
//         //     console.log(`I am a ${name}, my nutrition is ${nutrition}, I weigh ${weight} kg.`)
//         // }
//     }
//     description = function () {
//         console.log(`I am a ${this.name}, my nutrition is ${this.nutrition}, I weigh ${this.weight} kg.`)
//     }
// }

// var monkey = new animalES6("monkey", true, "heterotoph", 10);
// console.log(monkey);
// monkey.description();

//cu ES.6
// class dogsES6 {
//     constructor(breed, size) {
//         var _breed = breed;
//         this.size = size;
//         // this.getSize = () => size; //face return automat daca avem o singura instructiune
//         this.getBreed = function () {
//             return _breed;
//         }
//         this.setSize = function () {
//             this.size = `big`;
//         }  // se cheama setter

//     }
//     sound = function () {
//         return `bark`;
//     }
// }

//Mostenirea copilului de la parinte in ES5
//se face cu call - calling the constructor of the parent class

// function animalES5(name, fur, nutrition, weight) {
//   this.name = name;
//   this.fur = fur;
//   this.nutrition = nutrition;
//   this.weight = weight;
//   this.description = function () {
//     console.log(
//       `I am a ${name}, my nutrition is ${nutrition}, I weigh ${weight} kg.`
//     );
//   };
// }

// function birdES5(name, fur, nutrition, weight, flightSpeed) {
//   animalES5.call(this, name, fur, nutrition, weight); // se face cu call
//   this.flightSpeed = flightSpeed;
// }

// var owl = new birdES5("owl", false, "mice", 3, 100);
// console.log(owl);

// var chicken = new birdES5("chicken", false, "corn", 3, 0);
// console.log(chicken);
// chicken.description();

// //Mostenirea copilului de la parinte in ES6
// se face cu extends.

// class animalES6 {
//   constructor(name, fur, nutrition, weight) {
//     this.name = name;
//     this.fur = fur;
//     this.nutrition = nutrition;
//     this.weight = weight;
//   }
//   description = function () {
//     console.log(
//       `I am a ${this.name}, my nutrition is ${this.nutrition}, I weigh ${this.weight} kg.`
//     );
//   };
// }

// class BirdES6 extends animalES6 {
// // se face cu extends.
//   constructor(name, fur, nutrition, weight, flightSpeed) {
//     super(name, fur, nutrition, weight);
//     this.flightSpeed = flightSpeed;
//   }
// }

// var pelican = new BirdES6("pelican", false, "fish", 20, 5);
// console.log(pelican);

// class Reptile extends animalES6 {
//   constructor(name, fur, nutrition, weight) {
//     super(name, fur, nutrition, weight);
//   }
//   coldBlood = true; // propriet. automata pt ca toate su sangele rece
//   description = function () {
//     console.log(`I am too cool to be bothered`);
//   };
// }

// var snake = new Reptile("Anaconda", false, "mice", 100, true);
// console.log(snake);
// // snake.description(); // a suprascris descrierea de la parinte : Rezultat in consola: I am too cool to be bothered

// // sa facem o clasa care mosteneste Reptile

// class Crocodile extends Reptile {
//   constructor(name, fur, nutrition, weight, eatsHuman) {
//     super(name, fur, nutrition, weight); // la super pune toate propriet din constructorul parintelui
//     this.eatsHuman = eatsHuman;
//     delete this.fur; // cu delete putem scoate din propriet. parintilor
//   }
//   goodSwimmer = true; // accepta otice tip de valoare
//   deleteFur = function () {
//     delete this.fur; //with delete we can delete properties.
//   };
// }

// var aligator = new Crocodile("Crocodilu", false, "mud", 150, "yes");
// console.log(aligator);

// //exemplu slide The Find Array
// //we have an array
// var arr = [10, 11, 12, 30];

// //we write our custom function for searching
// //we want to find an element that has a value over 20:
// function searcher(value, index, array){
//     return value > 20;
// }

// //we use the find array function
// var item = arr.find(searcher);
// console.log(arr.find(searcher));

//Our custom function can accept arguments like: value, index, array.
//So we can search for items in the array, considering their value or position in the array.
//arr.find() accepts an argument - the name of our function.

//
