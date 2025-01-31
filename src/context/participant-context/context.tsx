import React, { createContext, useContext, useEffect, useState } from "react";
import { NAV_LINKS, STORAGE_KEYS } from "../../shared/participants/constants";
import { Storage } from "../../lib/stoarge";
import { useNavigate } from "react-router-dom";


type TParticiPant = {
    fullname: string
}

type TContextValues = {
    participant:TParticiPant | undefined
}

const participantContext = createContext<TContextValues | null>(null)




export const ParticiPantProvider = ({ children }: { children: React.ReactNode }) => {
 
   const [ participant, setParticipant ] = useState<TParticiPant>()
   const navigate = useNavigate()

    useEffect(() => {
        const userDetails = Storage.get(STORAGE_KEYS.particpant)
        if (!userDetails)
        {
            navigate(NAV_LINKS.startQuiz)
        }
            setParticipant(userDetails)
    }, [ navigate ])
    

    const value = {
        participant
    }
    
    return (
        <participantContext.Provider value={value}>
            {children}
        </participantContext.Provider>
    )
}

export const useParticipantContext = () => {
    const context = useContext(participantContext)
    if (!context) return null
    return context
}