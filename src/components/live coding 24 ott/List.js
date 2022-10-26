import React from 'react';
import Card from './sub/Card';

const List = () => {
    const [searchValue, setSearchValue] = React.useState("");

    const [movies, setMovies] = React.useState([]);

    const searchMovie = async() => {
        const res = await fetch("https://www.omdbapi.com/?s="+ searchValue +"&apikey=42f82aeb");
        const json = await res.json();
        setMovies([...json.Search]);
    }
   
    return(<div style={{display: 'flex', marginTop: 24, alignItems: 'center', flexDirection: 'column'}}>
        {/* SEARCH BAR */}
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.currentTarget.value)}></input> 
            <button onClick={searchMovie}>Search</button>
        </div>
        {/* ITEMS LIST */}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           {movies.map((object, key) => (
            <Card id={object.imdbID} title={object.Title} description={object.Year} poster={object.Poster} />
           ))}
        </div>
    </div>)
}

export default List;