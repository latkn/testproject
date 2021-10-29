let numberOfFilms; 



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// start();
// askUser(); 
// getAnswers(); 
writeYourGenres(); 


function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    }
}





function askUser() {
    for (let i = 0; i < 2; i++) {
        let firstQuestion = prompt(' Один из последних просмотренных фильмов? ');
        let secondQuestion = prompt(' На сколько оцените его? ');
        if (firstQuestion == '' || firstQuestion == null || firstQuestion.length > 50) {
            i--;
            console.log('error');
        }
        personalMovieDB.movies[firstQuestion] = secondQuestion;
    }
}



function getAnswers() {
    if (personalMovieDB.count < 10) alert ('Просмотрено довольно мало фильмов');
    if (personalMovieDB.count > 10 && personalMovieDB.count < 30) alert('Вы классический зритель');
    if (personalMovieDB.count > 30) {
        alert('вы киноман')
    } else {
        alert('произошла ошибка');
    };

}



function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log (personalMovieDB);
    }
}


 
function writeYourGenres () {
    for (let i = 1; i<4; i++) {
        personalMovieDB.genres.push(prompt (`Ваш любимый жанр под номером ${i}`, ""));
        console.log ('записано '+ personalMovieDB.genres);
    }
}

console.log(personalMovieDB.movies);
console.log(personalMovieDB);
console.log(personalMovieDB.genres);
