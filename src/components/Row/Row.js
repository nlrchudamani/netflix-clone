import React ,{ useState , useEffect } from 'react'

import './Row.css'
import rootUrl from '../../axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const imgUrl = "https://image.tmdb.org/t/p/original"

function Row({title, fetchUrl , isLargePath}){
    const [movies, setMovies] = useState([])
    const [trailerUrl,setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData(){
            const request = await rootUrl.get(fetchUrl)
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl])
    
    const opt = {
        width: "100%",
        height: "390",
        playerVars: {
            autoplay:1
        }
        
    }

    const handleClick = (movie) => {
    
        if (trailerUrl) {
            setTrailerUrl('')
            setUrl(movie)
        } else {
           setUrl(movie)  
        }
    }
    const setUrl = (movie) => {
        movieTrailer(movie?.original_title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'))

            }).catch(error => {console.log(error)})
    }
    return (
        <div className="row"> 
            {/**
             * Title
             */}
             <h2 >{title}</h2>

             {/** continer -> posters */}
             <div className="row__posters">
                 {movies.map(movie =>(
                     <img
                         key={movie.id}
                         onClick={() => handleClick(movie)}
                         className={`row__poster ${isLargePath && "row__poster_large"}  `}
                         src={`${imgUrl}${isLargePath ? movie?.poster_path: movie?.backdrop_path}`}
                         alt={movie.original_title}
                     />
                     
                 ))}
                
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opt} />}
           
        </div>
    )
}

export default Row 