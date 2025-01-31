import { useState, useEffect } from "react"
import { TOptions, TQuestionStored } from "../../pages/participant/Questions"
import { STORAGE_KEYS } from "../../shared/participants/constants"
import { Storage } from "../../lib/stoarge"

export const useQuestionLocalStorage = () => {
    const [ questionDetailsInStorage, setQuestionDetailsInStorage ] = useState<TQuestionStored[] | null>(
        Storage.get(STORAGE_KEYS.questionStorage) ? Storage.get(STORAGE_KEYS.questionStorage) : null
    )

    const saveToLocalStorage = (questionId: number, answer: TOptions | null) => {

        if (!answer) return

        setQuestionDetailsInStorage((prev) => {
            if (!prev) return [ { questionId: questionId, userAnswer: answer } ]

            const existingAnswer = prev.findIndex((question) => question.questionId === questionId)

            if (existingAnswer > -1)
            {
                const updateQuestionDetails = [ ...prev ]
                updateQuestionDetails[ existingAnswer ].userAnswer = answer
                return updateQuestionDetails
            }
            return [ ...prev, { questionId: questionId, userAnswer: answer } ]
        })
    }


    useEffect(() => {
        Storage.save(STORAGE_KEYS.questionStorage, questionDetailsInStorage)
    }, [ questionDetailsInStorage, setQuestionDetailsInStorage ])
    return { saveToLocalStorage, questionDetailsInStorage }
}