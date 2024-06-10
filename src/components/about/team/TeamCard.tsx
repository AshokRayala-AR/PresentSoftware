
import { ProfessionalsData } from "./TeamData"

import { CiCirclePlus } from "react-icons/ci";

function TeamCard() {
  return (
    <div>
     
<div className="flex flex-col">
  {ProfessionalsData.map((item, index)=>{
    return (
        <>
       
        <div key={index} className="bg-white p-5 space-y-2 flex flex-col items-center">
     <h1>{item.name}</h1>
     <h4>{item.profession}</h4>
     <img src={item.src} alt={item.alt}/>
     <CiCirclePlus className="bg-blue-700 rounded-full text-white text-2xl -translate-y-5"/>
        </div>
      
       
        </>
    )
  })}

    
    


</div>

    </div>
  )
}

export default TeamCard