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





export const Questions = () => {
  // an hook would be needed
  const param = useParams()

  if (!param.id) return
  
  const intialIndex = parseInt(param.id) - 1
  
  const [ questionCount, setQuestionCount ] = useState(intialIndex)
  const [ selcetedOption, setSelectedOption ] = useState<number>()
  // const pathname = useResolvedPath()
  const navigate = useNavigate()
  
  const questionLength =  exams.length - 1
  
  const isAtFirstQuestion = questionCount <= intialIndex
  
  useEffect(() => { 
    if (typeof window != 'undefined')
    {
      const userDetails = Storage.get(STORAGE_KEY)
      if(!userDetails) navigate(NAV_LINKS.startQuiz)
    }
  },[navigate])

  
  
  const nextQuestion = useCallback(() => {
    if (questionCount >= questionLength)
    {
      navigate(NAV_LINKS.result)
    }
    setQuestionCount((prev) => prev + 1)
  }, [ questionCount ])
  
  const previousQuestion = useCallback(() => {
    setQuestionCount((prev)=> prev - 1)
  } 
  , [questionCount])

  // console.log(pathname)




  useEffect(() => {
  }, [nextQuestion])

  if(!exams[questionCount]) return
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
        <Button onClick={previousQuestion}  isDisable={isAtFirstQuestion} >Back</Button>
        <Button onClick={nextQuestion}  >Next</Button>
      </div>
    </ParticipantLayouts>

  )
}

