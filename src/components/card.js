import React from 'react';

const Card = ( { name, email, id } ) => {
    return(
        <div className='tc bg-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
            <h2 className='rnames'>{name}</h2>
            <p className='rnames'>{email}</p>
            </div>
        </div>
    )
}

export default Card;