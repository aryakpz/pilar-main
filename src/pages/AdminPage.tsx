import React from "react";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";

export const AdminPage:React.FC=()=>{
    const nav=useNavigate()
    const handleClick=()=>{
        console.log("clicked")
          nav('')
    }
    return(
        <div>
            <Button  
              label="+ New portfolio"
              type="button"
              onClick={handleClick}
              btntype="bg-black"
             />
             <div className="p-5">

             </div>
               <Button  
              label="View More"
              type="button"
              onClick={handleClick}
              btntype="bg-white"
             />
        </div>
    )
}