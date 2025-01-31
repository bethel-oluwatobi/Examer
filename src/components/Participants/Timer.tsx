import { useEffect, useState } from "react"



export const Timer = ({ intialSec }: { intialSec: number }) => {
    const [ timeLeft, setTimeLeft ] = useState(intialSec)
    
    useEffect(() => {
        if (timeLeft <= 0) return
        const timer = setInterval(() => setTimeLeft((prevState) => prevState - 1), 1000) 
        return ()=> clearInterval(timer)
    }, [ timeLeft ])

  const formatTime = (seconds:number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return [hrs, mins, secs].map(unit => String(unit).padStart(2, "0")).join(":");
};

  return (
    <div>
        {formatTime(timeLeft)}      
    </div>
  )
}

