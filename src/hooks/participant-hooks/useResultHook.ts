import { useEffect, useState } from "react"
import { exams, NAV_LINKS } from "../../shared/participants/constants"
import { useNavigate } from "react-router-dom"
import { useGetParticipantSession } from "./useGetParticipantSession"
import { useQuestionLocalStorage } from "./useQuestionLocalStorage"

export const useResultHook = () => {
    const navigate = useNavigate()
    const [ totalScore, setTotalScore ] = useState(0)
    const participants = useGetParticipantSession()
    const { questionDetailsInStorage } = useQuestionLocalStorage()
    const pointsPerQuestion = 10 as const


    const score = () => {
        //  to calculate the score i have to get stored answerid and question.
        // so i want to use the id to get the examquestion 
        // then compare the answer with the question correct answer
        // return a answers
        // we use for each because we want to perform a cetain action we are not returning it
        let score = 0

        exams.forEach(exam => {
            questionDetailsInStorage?.forEach((storedQuestion: { questionId: any; userAnswer: any }) => {
                if (exam.id === storedQuestion.questionId && exam.correctOption === storedQuestion.userAnswer)
                {
                    score++
                }
            })
        });
        return score
    }

    useEffect(() => {
        if (!questionDetailsInStorage)
        {
            navigate(NAV_LINKS.questions)
            return
        }
        const finalScore = score()
        setTotalScore(finalScore * pointsPerQuestion)
    }, [ questionDetailsInStorage ])

    return { totalScore, participants }
}