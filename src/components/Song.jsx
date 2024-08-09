import { useState } from "react"

export const Song = ({fn,song}) =>{

    const [playerFlag, setplayerFlag] = useState(false);
    const showplayer = () =>{
        // setplayerFlag(!playerFlag);
        fn(true,song);
    }

    return(<div>
    <div className="row mb-2">
            <div className="col-4">
                <img src={song.artworkUrl100} alt=""/>
            </div>

            <div className="col-4">
            <p>{song.artistName} {song.trackName}</p> 
            </div>

            <div className="col-4">
                <button onClick={showplayer} className=" btn btn-primary">Play Song</button>
            </div>
        
        </div>
        </div>)
}