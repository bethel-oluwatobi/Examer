

// on result page i want to be a ble to calculate score 

import { useEffect, useState } from "react"
import { useGetParticipantSession } from "../../hooks/participant-hooks/useGetParticipantSession"
import { useQuestionLocalStorage } from "../../hooks/participant-hooks/useQuestionLocalStorage"
import { exams, NAV_LINKS } from "../../shared/participants/constants"
import { useNavigate } from "react-router-dom"


const useScore = () => {
  
}
// and display score
export const Result = () => {
  const participants = useGetParticipantSession()
  const { questionDetailsInStorage } = useQuestionLocalStorage()
  const navigate = useNavigate()
  const [totalScore, setTotalScore] =  useState(0)
  const pointsPerQuestion = 10 as const
 

  const score = () => {
    //  to calculate the score i have to get stored answerid and question.
    // so i want to use the id to get the examquestion 
    // then compare the answer with the question correct answer
    // return a answers
    // we use for each because we want to perform a cetain action we are not returning it
    let score = 0

    exams.forEach(exam => {
      questionDetailsInStorage?.forEach(storedQuestion => {
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
  }, [questionDetailsInStorage])
  return (
    <div>
       {`${participants?.fullname } totalScore ${totalScore}`}
    </div>
  )
}

