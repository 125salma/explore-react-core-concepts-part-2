import { useState } from "react"

export default function Team(){
 const [team, setTeam] = useState(11)
   const handelAdd =()=>{
    const newAdd = team+1;
    setTeam(newAdd)
   }
   const handelReduce =()=>{
     setTeam(team-1);
 
   }

   const TempleteStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px'
   }


    return(
        <div style={TempleteStyle}>
            <h3>Player: {team}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelReduce}>Reduce</button>
        </div>
    )
}
