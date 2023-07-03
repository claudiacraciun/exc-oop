//Exc 

// Sa se creeze o clasa Dinosaur cu 3 campuri: weight (argument obligatoriu cand se instantiaza), name (captat de catre user - prin prompt), speed (default value de 30)
// Sa se creeze 2 clase copil - Tyranosaurus care are ca proprietate default isFamous (bool); de asemenea toti tyranosaurii au speed de 50
// a 2-a clasa copil: Tryceraptos in care avem 1 singur camp nou - numberOfHorns (captat de catre user - prin prompt)
// o clasa Food cu 2 proprietati captate de catre user: name (string) & isReal (bool; in momentul in care apare prompt-ul sa intrebe Esti sigur ca ${name} este o mancare reala?)
// Sa se creeze o functie addFoodToDino() care sa adauge mancare la dinozaur si sa le creasca greutatea cu 10%
// Sa se adauge o metoda eatsGrass() la clasa de Tyranosaurus dupa ce am scris tempalte-ul (mai jos in cod) care verifica daca obiectul Tyranosaurus are la food ca name "grass" si daca da -> ii oferim obiectului Tyranosaurus o proprietate green (bool sau string)

// class Dinosaur {
//     constructor(weight) {
//         this.weight = weight;
//         this.name = prompt("How is your dinosaur name");

//     }
//     speed = 30;

// }

// var dinosaur = new Dinosaur(150);
// console.log(dinosaur);

// class Tyranosaurus extends Dinosaur{
//     constructor(weight, isFamous){
//         super(weight);
//         this.isFamous=isFamous;
//     }
//     speed = 50;

// }

// var tirano = new Tyranosaurus(200, true);
// console.log(tirano);

// class Tryceraptos extends Dinosaur {
//     constructor(weight){
//         super(weight);
//         this.numberOfHorns = prompt("Enter the number of horns");
//     }

// }

// var trycepo = new Tryceraptos(100);
// console.log(trycepo);

// class Food {
//     constructor(){
//         this.foodName=prompt("Enter the food name");
//         this.isReal=Boolean(prompt(`Esti sigur ca ${this.foodName} este o mancare reala?`));
//     }
// }

// // var vegetariana = new Food();
// // console.log(vegetariana);

// function addFoodToDino(dino){
//     dino.nutrition=new Food();
//     dino.weight=dino.weight+0.1*dino.weight;
// }

// // addFoodToDino(trycepo);
// // console.log(trycepo);

// // Sa se adauge o metoda eatsGrass() la clasa de Tyranosaurus dupa ce am scris tempalte-ul (mai jos in cod) care verifica daca obiectul Tyranosaurus are la food ca name "grass" si daca da -> ii oferim obiectului Tyranosaurus o proprietate green (bool sau string).

// Tyranosaurus.prototype.eatsGrass=function(){
//     if(this.nutrition.foodName=="grass"){
//         this.green=true;
//     }
// }

// addFoodToDino(tirano);
// console.log(tirano);
// Dinosaur.prototype.eatsGrass="iarba";

// var tyrano2 = new Dinosaur(100);
// console.log(tyrano2);

//Rezolvare exc la ultima cerinta
//se folos. prototype doar in ES5, nu merge in ES6.

// function Dog(breed) {
//   this.breed = breed;
// }

// Dog.prototype.owner = "Elisa";

// var pug = new Dog("pug");
// console.log(pug);
// console.log(pug.owner);

// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// myObject.greet(); // Greetings from Madrid


// console.log(`----------------PROMISES-------------`);

//------------PROMISES--------------//

// setTimeout(()=> console.log("This is the 1st message"), 4000);
// setTimeout(()=> console.log("This is the 2nd message"), 5000);
// setTimeout(()=> console.log("This is the 3rd message"), 1000);

// const myPromise = new Promise ((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("I am a resolved promise");
//         console.log("I am done");
//     }, 4000);
// })
// console.log(myPromise);

// const myWork = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("working");
//         console.log("JS is cool");

//     }, 3000);

// })

// console.log(myWork);

// const buyBread = (storeOpened) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             if(storeOpened===true){
//                 resolve("buy 5 breads");
//             }else{
//                 reject(new Error("store is closed"));
//             }
//         }, 5000);
//     })

// }

// buyBread(true);
// console.log(buyBread(false));

// Exc.:

// Creati o functie cu 3 parametrii boolean isBlockbuster, hasDiscount, haveADate; functia trebuie sa returneze o promisiune;
// Daca isBlockbuster & hasDiscount (sunt true) -> o sa avem mesajul It's good to see a good movie with less money. pe resolve()
// Daca isBlockbuster & nu are discount -> mesaj: The movie is good but it's expensive
// Daca isBlockbuster & haveADate sau isBlockbuster & hasDiscount -> mesaj: The movie is good and I have more money and I'm not alone
// Daca nu e Blockbuster -> mesaj pe I'm not interested in bat movies pe resolve(), iar pe reject() un mesaj la alegere
// haveADate -> parametru default cu valoarea true

// const movies = (isBlockbuster, hasDiscount, haveADate = true) =>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             if(isBlockbuster===true && hasDiscount === true){
//                 resolve(`It's good to see a good movie with less money`);

//             }else if(isBlockbuster===true && hasDiscount === false){
//                 resolve(`The movie is good but it's expensive`);
//             }else if (isBlockbuster ===true && haveADate ===true || isBlockbuster ===true && hasDiscount === true){
//                 resolve(`The movie is good and I have more money and I'm not alone`);
//             }else if(isBlockbuster===false && hasDiscount ) {
//                 resolve(`I'm not interested in bad movies`);

//             }else{
//                 reject(new Error("Save money"));
//             }
//         }, 4000);
//     })

// }

// movies(false, false, true);
// console.log(movies(false, false));

// console.log(`----xxxxxx---------`)

// const buyBread = (storeOpened) => {
//   //  // functie anonima cu param storeOpened stocata in buyBread
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (storeOpened === true) {
//         resolve("buy 5 breads");
//       } else {
//         reject("store is closed");
//       }
//     }, 2000);
//   });
// };
// console.log(buyBread(true));
// // console.log(buyBread(true));
// buyBread(true)
//   .then((message) => {
//     //then preia mesajul din resolve si se ocupa de o promis care a fost rezolvata
//     console.log(`Because the store is opened, my wife told to ${message}`);
//   })
//   .catch((errorMesage) => {
//     //catch preia mesajul din reject si se ocupa de o promis care a fost rejectata cand avem param false
//     console.log(`Sunday is for sleeping and ${errorMesage}`);
//   })
//   .finally(() => {
//     //preia ambele mesaje din resolve si reject
//     console.log(`Promises are not that hard`);
//   })

  // console.log(buyBread(true)); //se va afisa inainte pentru ca are timeout
  // console.log(buyBread(true));// functie asincrona

  // //exc.Sa se creeze un obiect (fara clase etc) cu nume si varsta
  // // Sa se creeze o functie (arrow function) care sa ia ca parametru un obiect si sa printeze toate valorile lui -> ce nume are si ce varsta)
  // var kid = {
  //     name: `Vasilica`,
  //     age: 19,
  // }
  // var kid2 = {
  //     name: `Mitica`,
  //     age: 20,
  // }
  // const message = (person) => {
  //     for (const [key, value] of Object.entries(person)) {
  //         console.log(value);
  //     }
  // }
  // message(kid2);

  //Exc.:
  //Creati un obiect numit gandalf cu urmatoarele proprietati: nume (string), titlu (string), healthPoints(number),
  //hasDarkPowers(boolean), fellowshipOfTheRing( object with the name and race of each participant at the quest ),
  //enemies (array of strings), method smite(internal method that takes an object as a parameter and reduces
  // its health value by 25% of its initial value )

  // const gandalf = {
  //     name: "Gandalf",
  //     title: "Lord of the rings",
  //     healthPoints: 1000,
  //     hasDarkPowers: false,
  //     fellowshipOfTheRing: {
  //         wizard: {
  //             name: "Gandalf"
  //         },
  //         elf: {
  //             name: "Legolas"
  //         },
  //         men: {
  //             name: ["Aragorn", "Boromir"]
  //         },
  //         dwarf: {
  //             name: "Gimli"
  //         },
  //         hobbits: {
  //             name: ["Frodo", "Sam", " Merry", "Pippin"]
  //         }
  //     },
  //     enemies: ["Sauron", "Saruman", "Mouth of Sauron", "Lurtz", "Lord Vortech", "Gorkil the Goblin King", "Gollum", "Durin's Bane"],
  //     smite: function (obj) {
  //         obj.healthPoints -= obj.healthPoints * 0.25;
  //     },
  //     cure: function (obj) {
  //         obj.healthPoints += obj.healthPoints * 0.05;
  //     }
  // }

  // const sauron = {
  //     name: "Sauron",
  //     title: "Lord of the rings",
  //     healthPoints: 10000,
  //     hasDarkPowers: true,
  // }

  // console.log(sauron);
  // gandalf.smite(sauron);
  // console.log(sauron);
  // console.log(gandalf.enemies[1]);
  // gandalf.cure(gandalf);
  // console.log(gandalf);

  // Exc. Define a Book object which contains the information:

  // a title,
  // an author,
  // the year it was published ,
  // the number of pages ,
  // is it currently reserved.

  // var book = new Book()

  // The library should have the following methods:

  // add a book,
  // search for a book by title (use Array.find()),
  // delete a book (by title or by position in the array of books)
  // reserve a book (and un-reserving when returned).

  // library={
  //     name:"National library",
  //     address: "Alexandru street",
  //     books: ["carte1", "carte2", "carte3"],
  //     addAbook : (a) => library.books.push(a),

  // }

  // library.addAbook("femeile");
  // console.log(library.books);

  //https://www.youtube.com/watch?v=8SkHWeDoTf0


  // for loop
  // for(i=1;i<5;i++){
  //   console.log(i);
  // }

//   //exc. cu var

  // (() => {
  //   for (var i = 0; i < 3; i++)  {
  //       // console.log(i);
  //     setTimeout(() => console.log(i), 2000);
  //   }
  // })();

//   //

//   for(var i = 1; i < 6; i++) {
//     setTimeout(()=>{
//        console.log(i);
//     },0);
//  }

  //exc. cu let

  // (() => {
  //   for (let i = 0; i < 3; i++) {
  //     setTimeout(() => console.log(i), 2000);
  //   }
  // })();


//   //sau
//   (function(){
//     for (let i = 2; i > -1; i--) {
//       setTimeout(function(){
//         console.log(i);
//        }, 2000);
//     }
//   })()


//   //
//   for(let i = 1; i < 6; i++) {
//     setTimeout(()=>{
//        console.log(i);
//     },1000);
//  }
//  console.log('The loop is done!');

//   //
//   function greeting(name, role){
//     console.log(`Hello, my name is ${name}`);
//     console.log(`I'm a ${role}`);
//   }
  
// //   setTimeout(greeting, 3000, "Nathan", "Software developer");

// setTimeout(greeting("Nathan", "Software developer"), 3000);

// //clearTimeout(id); How to Cancel the setTimeout Method
// const timeoutId = setTimeout(function(){
//     console.log("Hello World");
// }, 2000);

// clearTimeout(timeoutId);
// console.log(`Timeout ID ${timeoutId} has been cleared`);


//exc. Make a function that can take any non-negative integer as an argument 
//and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.

//aici in ordine crescatoare
// const arrSort = [2,1,4,4,5];
// arrSort.sort((a,b) => a - b); // aici se vor compara toate intre ele dupa un algoritm care nu ne intereseaza si se va afisa un array cu nr ordonate crescator
// console.log(arrSort);

//aici in ordine descrescatoare
// const arrSortA = [2,1,4,4,5];
// arrSortA.sort((a,b) => b - a); 
// console.log(arrSortA);

// const arrSortB = [1,4,5,2,6,3];
// arrSortB.sort((a,b) => b - a); 
// console.log(arrSortB);

// const arrSortC = [1,2,5,4,8,5,9,7,2,3];
// arrSortC.sort((a,b) => b - a); 
// console.log(arrSortC);

// //
// for(var a = 1; a < 10; a++) {
//   console.log(a);
// } // declared "inside" the loop
// // console.log(a); // prints "10" and is called "outside the loop"

// //exc
// function alphabetPosition(text) {  
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let alphaNums = [];
      
//   text = text.toLowerCase();
//   for (let i = 0; i < text.length; i++) {
//     var idx = alphabet.indexOf(text[i]);

//     if (idx === -1){
//       continue;
//     } else{
//       alphaNums.push(idx + 1)
//     }
//   }
//   return alphaNums.join(" ");
  
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));