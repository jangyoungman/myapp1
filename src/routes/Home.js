import Movie from "../components/Movie";
import { useState, useEffect } from "react";
function Home() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
        getMovies();
    }, []);
    return (
        <div>
            <h1>The Movie List {loading ? "" : `(${movies.length})`}</h1>
            {loading ?
                <h1>Loading....</h1>
                :
                <div>
                    {movies.map(movie => (
                        <Movie
                            coverImg={movie.medium_cover_image}
                            id={movie.id}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres} />
                    )
                    )}
                </div>
            }
        </div>
    );
}
export default Home;