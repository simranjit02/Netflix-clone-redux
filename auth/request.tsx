const API_KEY = "5ccc315f7838d402e21708bbb34063a5"
const request ={
        fetchTreading:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
        fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionMovies:`/discover/movie?api_key=${API_KEY}&wih_genres=28`,
        fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&wih_genres=35`,
        fetchHorrormovies:`/discover/movie?api_key=${API_KEY}&wih_genres=27`,
        fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&wih_genres=10749`,
        fetchDocumentaasries:`/discover/movie?api_key=${API_KEY}&wih_genres=99`,
};
export default request