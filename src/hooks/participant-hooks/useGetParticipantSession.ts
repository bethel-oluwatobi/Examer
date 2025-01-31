import { useEffect, useState } from "react"
import { Storage } from "../../lib/stoarge"
import { NAV_LINKS, STORAGE_KEYS } from "../../shared/participants/constants"
import { useNavigate } from "react-router-dom"

type TParticiPant = {
    fullname: string
}

export const useGetParticipantSession = () => {

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
    return participant
}
