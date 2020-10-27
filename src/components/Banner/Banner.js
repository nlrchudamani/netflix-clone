import React , { useState , useEffect} from 'react'
import axios from '../../axios'

import reqs from '../../requests'

import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(reqs.fetchTrending)

            setMovie(result.data.results[
                Math.floor(Math.random() * result.data.results.length - 1)
            ])
        }
        fetchData();
    }, [])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    console.log(movie)
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"

        }}>
            <div className="banner__content">
                {/** header  */} 
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.orignal_name}</h1>

                {/** container for buttons  */}
                <div className="banner__buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">Add to watchlist</button>
                </div>
            
                {/** container for description  */}
                <h1 className="banner_description">
                    {truncate(movie?.overview,150)}
                </h1>

            </div>
            <div className="banner--fadeBottom" />
           
        </header>
    )
}

export default Banner