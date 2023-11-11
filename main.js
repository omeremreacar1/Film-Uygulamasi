const searchInput = document.querySelector("#searchInput");
const movies = document.querySelector(".movies");

runEventListeners();

function runEventListeners(){
    searchInput.addEventListener("keypress", search);
    document.addEventListener("DOMContentLoaded", addRandomMoviesToUI);
}

const api = new MovieAPI;

function search(e){
    if(e.key == "Enter"){
        movies.innerHTML = "";
        let movieName = searchInput.value.trim();
        api.getSpecificMovie(movieName)
        .then(response => {
            response.results.forEach(result => {
                console.log(result);
                movies.innerHTML += `
                <div class="movie">
                    <img src="${api.baseImgUrl}${result.poster_path}" width="300" height="455" class="moviePicture">  
            
                    <div class="info">
                        <p class="movieName">${result.title}</p>
                        <h5 class="point">${Math.round(result.vote_average)}</h5>
                    </div>
                </div>  
                `
            });
        });
    }
}

function addRandomMoviesToUI(){
    const values = api.getRandomMovies();

    values
    .then(response => {
        for(let i=0; i<=19; i++){
            movies.innerHTML += `
            <div class="movie">
                <img src="${api.baseImgUrl}${response.results[i].poster_path}" width="300" height="455" class="moviePicture">  
        
                <div class="info">
                    <p class="movieName">${response.results[i].title}</p>
                    <h5 class="point">${Math.round(response.results[i].vote_average)}</h5>
                </div>
            </div>
            `
        }
    });
}


