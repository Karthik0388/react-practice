import React from 'react'


const Player = (props) => {
    let{name,photo,runs}= props.PlayerAttr;
    return (
       
           <main>
                <img src={photo} alt="name" />
                <h2>{name}</h2>
                <p>{runs}</p>
            </main>
    )
}

export default Player
