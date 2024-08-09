import { useEffect, useState } from "react";
import { getSongs } from "../services/api-client";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { Player } from "../components/Player";

export const SearchPage = () => {
    const [allSongs, setSongs] = useState([]);
    const [flag, setFlag] = useState(false);
    const [song, setPlayerSong] = useState(null);

    const loadSongs = async () => {
        setSongs(await getSongs('Latest Songs'));
    }

    useEffect(() => {
        loadSongs();
    }, [])    

    const togglePlayer = (flag, songarg) => {
        setPlayerSong(songarg);
        setFlag(flag);
    }

    const getArtistName = async (artistName) => {
        console.log("Rec artist name", artistName);
        setSongs(await getSongs(artistName));
    }

    const jsx = <> <Search fn={getArtistName}/><Songs fn={togglePlayer} allsongs={allSongs}/></>
  
    return (
        
        <div style={{
            background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
            minHeight: '100vh',
            padding: '20px 0',
            color: '#ffffff',
            backgroundAttachment: 'fixed'
        }}>
            <div className="container">
                <h1 className="text-center mt-3 mb-4" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '15px',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>Music Store</h1>
                {flag ? <Player fn={togglePlayer} song={song}/> : jsx}
            </div>
        </div>
    );
}