import request from "../../auth/request"
import MovieRows from "../MovieRows"

const Home = () => {
  return (
    <div className="">
     <MovieRows title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} islargeRow/>
     <MovieRows title="Trending Now" fetchUrl={request.fetchTreading}/>
     <MovieRows title="Top Rated" fetchUrl={request.fetchTopRated}/>
     <MovieRows title="Action Movies" fetchUrl={request.fetchActionMovies}/>
     <MovieRows title="Comedy Movies" fetchUrl={request.fetchNetflixOriginals}/>
     <MovieRows title="Horror Movies" fetchUrl={request.fetchHorrormovies}/>
     <MovieRows title="Romance Movies" fetchUrl={request.fetchTopRated}/>
     <MovieRows title="Documentaries" fetchUrl={request.fetchDocumentaasries}/> 

    </div>
  )
}

export default Home