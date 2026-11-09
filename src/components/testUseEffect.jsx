import { useEffect, useState } from "react";

function TestUSeEffect () {
    const [nom,setNom] = useState("")
    const [prenom,setPrenom] = useState("")
    const [filliere,setFilliere] = useState("")
    const [info,setInfo] = useState("")
    useEffect(()=>{
        setInfo("NOM : " + nom + " PRENOM : " + prenom + " FILLIERE  " + filliere)   
    },[nom,prenom,filliere])

    return(
        <div>
            <label >nom</label>
            <input type="text" value ={nom} onChange={(e)=>{setNom(e.target.value)}}/>
            <label >prenom</label>
            <input type="text" value ={prenom} onChange={(e)=>{setPrenom(e.target.value)}} />
            <label >filliere</label>
            <input type="text" value ={filliere} onChange={(e)=>{setFilliere(e.target.value)}} />

            <h2>
                {info}
            </h2>
        </div>
    );
    
}
export default TestUSeEffect;