import React from 'react';
import Card from './sub/Card';

const List = () => {
    //Object: Movie => Title; Year; imdbID; Poster
    const [movies, setMovies] = React.useState([]);
    const [searchInput, setSearchInput] = React.useState("");

    const search = async () => {
        const res = await fetch(`https://www.omdbapi.com/?s=${searchInput}&apikey=42f82aeb`);
        const json = await res.json();
        setMovies([...json.Search]);
    }

    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{display:'flex', justifyContent: 'center', marginTop: 24}}>
            <input type="text" placeholder='CERCA FILM' value={searchInput} onChange={(e) => setSearchInput(e.currentTarget.value)}/>
            <button onClick={search}>Cerca</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {
                movies.map(movie => <Card movie={movie} />)
            }
            
        </div>
    </div>
}

export default List;