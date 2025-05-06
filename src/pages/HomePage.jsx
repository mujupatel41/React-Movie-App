import MovieCard from "../component/MovieCard"
import { useState } from "react";

export default function HomePage(){

    const [searchQuery, setSearchQuery] = useState("");

    let movies = [
        {id: "1", title: "Endgame", release_date: "2019"},
        {id: "2", title: "Titanic", release_date: "1998"},
        {id: "3", title: "Don", release_date: "2004"},
        {id: "4", title: "Terenaam", release_date: "2003"}
    ];

    let handleSearch = (e) =>{
        e.preventDefault();
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"  
                value={searchQuery}
                className="search-input" 
                placeholder="Search for movie...." 
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>
                    ))}
            </div>
        </div>
    )
}