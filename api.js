class MovieAPI {
    constructor(){
        this.apiKey = "c1a9af55b5164cef1d513e517784ea42";
        this.baseImgUrl = "http://image.tmdb.org/t/p/w500/";
        this.discoverUrl = "https://api.themoviedb.org/3/discover/movie?api_key=";
        this.searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=`;
    }

    async getRandomMovies(){
        const datas = await (await fetch(`${this.discoverUrl}${this.apiKey}`)).json();

        return datas;
    }

    async getSpecificMovie(movieName){
        const datas = await (await fetch(`${this.searchMovieUrl}${movieName}`)).json();

        return datas;
    }
}