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



 personalMovieDB.start = function() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    }
}

personalMovieDB.askUser = function() {
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



personalMovieDB.getAnswers = function() {
    if (personalMovieDB.count < 10) alert ('Просмотрено довольно мало фильмов');
    if (personalMovieDB.count > 10 && personalMovieDB.count < 30) alert('Вы классический зритель');
    if (personalMovieDB.count > 30) {
        alert('вы киноман')
    } else {
        alert('произошла ошибка');
    };

}

personalMovieDB.showMyDB =  function() {
        console.log (personalMovieDB.privat);

}

personalMovieDB.toggleVisibleMyDB = function() {
    if (personalMovieDB.privat == false) {
        personalMovieDB.privat = true; 
    } else personalMovieDB.privat = false;
}
 
personalMovieDB.writeYourGenres = function() {
    let writeData;     
    for (let i = 1; i<4; i++) {
            writeData = (prompt (`Ваш любимый жанр под номером ${i}`, ""));
            if (writeData == "" || writeData == null) {
                 i--;
                 continue; 
            }
            personalMovieDB.genres.push(writeData);
            console.log ('записано '+ personalMovieDB.genres);
        }
    personalMovieDB.genres.forEach(element => console.log(`любимый жанр №${(personalMovieDB.genres.indexOf(element)+1)} - это ${element}`));
}

//console.log(`Это сам объект: ${Object.keys(personalMovieDB)}`);
//console.log(personalMovieDB.movies);
//console.log(personalMovieDB.genres);

personalMovieDB.writeYourGenres(); 
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

