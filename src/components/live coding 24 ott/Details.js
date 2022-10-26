import React from 'react';

const Details = (props) => {
    const [movie, setMovie] = React.useState(null);

    const retrieveMovie = async(id) => {
        const res = await fetch("https://www.omdbapi.com/?i="+ id +"&apikey=42f82aeb")
        const json = await res.json();
        setMovie({...json});
    }
    React.useEffect(() => {
        const id = window.history.state.usr.id;
        retrieveMovie(id)
    }, []) // => componentDidMount
    
    const getStars = () => {
        const stars = [];
        //8,1/10
        //["8,1", "10"]
        //8,1 => 8.1
        //(stringa)"8.1" => (numero)8.1
        //Math.floor === arrotonda in difetto => 8
        //Math.ceil === arrotonda in eccesso => 9
        //Math.round === arrotonda all'intero più vicino
        const numeroInteroOMG = Math.floor(parseFloat(movie.Ratings[0].Value.split('/')[0].replace(',', '.')));
        for(let i = 0; i < numeroInteroOMG; i++){
            stars.push("★");
        }

        return stars;
    }
    return(<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%'}}>

    {
        movie && <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={movie.Poster} />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1>{movie.Title}</h1>
                <span><strong>Direttore: </strong>{movie.Director}</span>
                <span><strong>Paese: </strong> {movie.Country}</span>
                <span><strong>Genere: </strong> {movie.Genre}</span>
                <span><strong>Data di rilascio: </strong> {movie.Released}</span>
                <span><strong>Punteggio: </strong> {movie.Ratings[0].Value} {getStars()}</span>

            </div>
        </div>
    }

    </div>)
}

export default Details;