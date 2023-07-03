// var a = 7;
// console.log(a);



// var book ={
//     title: "Carte",
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

// var b=['claudia', "daniela"]
// console.log(b);
// console.log(b[0]);


// console.log(book.title);
// console.log(book.chapter);
// console.log(book.chapter[2]);
// console.log(book.history);
// console.log(book.history.launchYear);
// console.log(book.history.nrCoppies);
// book.history.nrCoppies=2000; // se targheteeaza ob. book, se navigheaza in prop. history 
// console.log(book);

// book.chapter[4]=10;
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
//         si are , ${this.pages},  pagini.Aceasta carte are , ${this.chapter.length}, capitole, 5'oclock`);
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

// console.log(book2.title);
// book2.message2();

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



// document.getElementsByClassName('title')[0].textContent=movie1.show(); -> am targhetat un document din html si am inlocuit textul lui cu valoarea care apare in consola.
// console.log(movie1.show());

//cum aratam ca movie face parte din movie1?
// console.log(book3 instanceof movie); // book3 este o instanta a tipului sau a clasei movie.
// console.log(movie2 instanceof Object);  //movie2 este o instanta a clasei Object care este clasa cea mai de baza (cum aveam la html DOCTYPE)

// var movie3=Object.create(movie("Rocky", 2004, ["Stalone"])); // inlocuim paramentrii cu valoari, iar cast este array de aceea am scris in paranteze drepte
// var song ={
//     play: function(){
//         console.log(this.title + " is played by " + this.artist);
//     }
// }

// var song1=Object.create(song); // functia song e functia constructor
// song1.title="Enter";
// song1.artist="XXX";
// song1.play(); //am chemat functia play

// //Exc. Encapsulation

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

// //Exc. Abstractizare
// console.log(11111111); // intre cele 2 este diferenta de culoare din cauza tipului de date: unul e string si altul e numar.
// console.log("111111");



