import React from 'react';

const Details = (props) => {
    const [movie, setMovie] = React.useState(null);

    const retrieveMovie = async(id) => {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=42f82aeb`);
        const json = await res.json();
        setMovie({...json})
    }

    React.useEffect(() => {
        retrieveMovie(window.history.state.usr.id);
    }, []) // [] => componentDidMount

    const getStars = (ratings) => {
        /**
         * Math.floor => arrotondo all'intero più vicino per difetto
         * Math.ceil => arrotondo all'intero più vicino per eccesso
         * Math.round => arrotondo all'intero più vicino
         */

        //8.8/10 || 3/5
        //[8.8, 10] => selezioniamo 0
        //(stringa)"8.8" => (numero)8.8 || con parseFloat || parseInt
        //Math.floor(numero) => 8

        const numberOfStars = Math.floor(parseFloat(ratings.split('/')[0])) // => 8
        const twinkleStars = [];

        for(let i = 0; i < numberOfStars; i++){
            twinkleStars.push("⭐");
        };
        for(let i = 0; i < parseInt(ratings.split('/')[1]) - numberOfStars; i++){
            twinkleStars.push("☆");
        }

        return twinkleStars;
    }
   return <div style={{display: 'flex', justifyContent: 'center', width: '80vw', marginTop: 24}}>
    {movie &&  <div style={{display: 'flex'}}>
            <img src={movie.Poster}/>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: 12}}>
                <h1>{movie.Title}</h1>
                <span><strong>Anno di uscita: </strong> {movie.Released}</span><br />
                <span><strong>Durata: </strong>{movie.Runtime}</span><br />
                <span><strong>Direttore: </strong>{movie.Director}</span><br />
                <span><strong>Genere: </strong>{movie.Genre}</span><br />
                <span><strong>Voto: </strong>{movie.Ratings[0].Value} {getStars(movie.Ratings[0].Value)}</span>

            </div>
        </div>}
       
   </div>
}

export default Details;