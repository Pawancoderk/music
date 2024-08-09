import { useRef } from "react";

export const Search = ({fn}) =>{
    const artist = useRef();
    return (<>
        <label>Artist Name</label>
        
        <input ref={artist} type="text" className="form-control" placeholder="Search Artist Wise Name"/>
        <button className="btn btn-success mt-1 mb-4" onClick={() =>{
            fn(artist.current.value);
        }}>Search It</button>
        <br />
    </>);
}