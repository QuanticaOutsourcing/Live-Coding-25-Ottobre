import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    return  <div key={props.id} style={{display: 'flex', flexDirection: 'row', width: '75%', marginTop: 12}} onClick={() => navigate('/details', {
        state: {
            id: props.id
        }
    })}>
    <img src={props.poster} style={{width: 100, height: 100, objectFit: 'contain', marginRight: 12}} alt={props.title} />
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2 style={{margin: 0}}>{props.title}</h2>
        <p>{props.description}</p>
    </div>
</div>
}

export default Card;