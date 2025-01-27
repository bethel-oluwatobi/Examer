import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../design_system/components/ui/Button"
import { useCallback, useEffect, useState } from "react"
import { ParticipantLayouts } from "../../layouts/participants/ParticipantLayouts"
import { Storage } from "../../lib/stoarge"
import { exams, NAV_LINKS, STORAGE_KEYS, TExams } from "../../shared/participants/constants"
import { STORAGE_KEY } from "../../view/participants/StartQuizView"
import { OptionsCmp } from "../../components/Participants/Questions/OptionCmp"


// i want to be able to naviagate between question
// i want it to replace or set the url id to the number of question in the array
// i want it to navigate to the result page if the questionCount <= exams.length i want to be able to change the next to submit button.
//  i want to disable the previous button when the the questionCount is less than or equal to 0



export const useGetParticipantSession = () => {
  
  const [participant, setParticipant] =  useState()
  const navigate = useNavigate()
  
  useEffect(() => { 
      const userDetails = Storage.get(STORAGE_KEY)
    if (userDetails)
    {
      setParticipant(userDetails)
    }
    navigate(NAV_LINKS.startQuiz)
  }, [ navigate ])
  return participant
}


export const Questions = () => {
  // an hook would be needed
  const {id:paramId} = useParams()
  const navigate = useNavigate()
  const participant = useGetParticipantSession()
  

  // proper prasing and validation of id
  const id = parseInt(paramId || '0', 10 )
  if (id <= 0 || id < exams.length)
  {
    return
  }
  
  
  console.log(id)
  const [ questionCount, setQuestionCount ] = useState(id-1)
  const [ selcetedOption, setSelectedOption ] = useState<number>()
  
  const questionLength =  exams.length - 1
  const isAtFirstQuestion = questionCount <= 0
  const isAtLastQuestion = questionCount === questionLength
  


  
  
  const nextQuestion = useCallback(() => {
    if (questionCount >= questionLength)
    {
      navigate(NAV_LINKS.result)
      return
    }
    setQuestionCount((prev) => prev + 1)
    navigate(`/id/questions/${id + 1}`)
  }, [ questionCount ])
  
  const previousQuestion = useCallback(() => {
    setQuestionCount((prev)=> prev - 1)
    navigate(`/id/questions/${id - 1}`)
  } 
  , [questionCount])

  // console.log(pathname)


  if (!exams[ questionCount ]) return
  
  return (
    <ParticipantLayouts>
        <h1>{ exams[questionCount].questions}</h1>
      { exams[ questionCount ].options.map((option, index) => (
        <OptionsCmp
          index={ index }
          optionLetter={ option.optionLetter }
          selcetedOption={ selcetedOption }
          setSelectedOption={ setSelectedOption }
          optionAnswer={ option.optionsAnswer }
          correctOption={ option.correct } key={ index }
        />
      )) }
      <div className="flex items-center gap-5">
        <Button onClick={previousQuestion}  isDisable={isAtFirstQuestion} >back</Button>
        <Button onClick={ nextQuestion }  >{ isAtLastQuestion ? 'submit' : 'next'}</Button>
      </div>
    </ParticipantLayouts>

  )
}

