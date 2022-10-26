import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    return  <div style={{display: 'flex', width: 750, alignItems: 'center'}} onClick={() => navigate('/details', {
        state: {
            id: props.movie.imdbID
        }
    })}>
    <img src={props.movie.Poster} style={{width: 100, height: 100, marginRight: 12, objectFit: 'cover'}} />
    <div>
        <h1>{props.movie.Title}</h1>
        <p>Anno di uscita: {props.movie.Year}</p>
    </div>
</div>
}

export default Card;