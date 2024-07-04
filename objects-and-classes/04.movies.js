function movies(arr) {

    let movies = [];

    for (const command of arr) {

        if (command.includes('addMovie')) {
            let tokens = command.split('addMovie ');
            let movieName = tokens[1]
            movies.push({ name: movieName });

        } else if (command.includes('directedBy')) {
            let tokens = command.split(' directedBy ');
            let movieName = tokens[0]
            let movieDirector = tokens[1]

            const existingMovie = movies.find((movieObj) => movieObj.name === movieName);

            if (existingMovie) {
                existingMovie.director = movieDirector;
            }

        } else if (command.includes('onDate')) {
            let tokens = command.split(' onDate ');
            let movieName = tokens[0]
            let movieDate = tokens[1]

            const existingMovie = movies.find((movieObj) => movieObj.name === movieName);

            if (existingMovie) {
                existingMovie.date = movieDate;
            }
        }
    }



    for (const movieObj of movies) {

        if(movieObj.name && movieObj.director && movieObj.date){
            console.log(JSON.stringify(movieObj));
        }
        
    }



}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])