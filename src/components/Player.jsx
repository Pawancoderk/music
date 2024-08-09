export const Player = ({fn,song}) =>{
    return (
        <div>
            
            <button onClick={() =>{
                fn(false,null);
            }} className=" btn btn-success">Back to songs</button>
            {/* <p>{song?.artistName} {song.trackName}</p>  */}

            <p>
            <br/>
            <img src={song.artworkUrl100} alt=""/>
            <br />
            {song?.artistName} {song?.trackName}
            </p> 
         
            <br/>

            <audio controls>
                <source src={song?.previewUrl} type="audio/mp4"/>
                audio not supported by browser
                
            </audio>
        </div>
            )
}