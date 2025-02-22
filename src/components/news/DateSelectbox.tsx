import { useState } from 'react'
import calander from '/assets/images/calander.svg'
type DateSelectorProps={
    value:string
}
export const DateSelectbox:React.FC<DateSelectorProps>=({value})=>{
    const [selectedDate,setSelectedDate]=useState<string >("")
  
    return(              
        <div className="flex gap-2 items-center p-2.5 border border-gray-200 rounded-lg text-sm font-semibold leading-6 ">
            <span className="text-gray-500">{value}:</span>                 
            <input className="border-0 focus:outline-none focus:ring-0 p-0 text-gray-900 text-base" type="date" value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)}/>  
            <img src={calander}/>                          
        </div> 
    )
}                           