import React ,{useState}from 'react'
import JSON from '../src/Players.json'
import Player from './Player'
import './Player.css'

const PlayerComponent = () => {

    let [players,setPlayers] = useState(JSON);

    return (
        <div id="PlayersBlock">
            {
                players.map((data) =>{
                    return <Player key={data.id} PlayerAttr={data}/>
                })
            }
        </div>
    )
}

export default PlayerComponent