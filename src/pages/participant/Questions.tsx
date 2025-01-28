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
    if (!userDetails)
    {
      navigate(NAV_LINKS.startQuiz)
    }
    setParticipant(userDetails)
  }, [ navigate ])
  return participant
}


const useSaveToLocalStorage = () => {
  const [ questionDetailsInStorage, setQuestionDetailsInStorage ] = useState<any[] | null>(
    Storage.get(STORAGE_KEYS.questionStorage) ? Storage.get(STORAGE_KEYS.questionStorage) : null
  ) 

  useEffect(() => {
    Storage.save(STORAGE_KEYS.questionStorage, questionDetailsInStorage)
  }, [questionDetailsInStorage])
  return setQuestionDetailsInStorage
}
export const Questions = () => {
  // an hook would be needed
  const { id: paramId } = useParams()
  const navigate = useNavigate()
  const participant = useGetParticipantSession()
  const setQuestionDetailsInStorage = useSaveToLocalStorage()

  // proper prasing and validation of id
  const id = parseInt(paramId || '0', 10)
  if (id < 1 || id > exams.length)
  {
    return
  }
  

  
  // this design can be used for multiple forms
  const [ questionIndex, setQuestionIndex ] = useState(id - 1)
  const [ selcetedOption, setSelectedOption ] = useState<number | null>(null)
  
  
  const questionLength = exams.length - 1
  const isAtFirstQuestion = questionIndex <= 0
  const isAtLastQuestion = questionIndex === questionLength
  


  // this is an amazing navigation of a page form 
  // it's like we are switching page but we are not making the state updates permenant updating the url path using arrays 
  // Amazing stuff thank you jesus
  
  // on navigate i want to store the question object and the answer choosen 
  // in an array then send them to the localstorage
  // we have a state which says data to store in localStorage 
  // then we would append the data to be stored with the 
  // questions details and the answer choosen by the user
  //  create a function Save To LocalStoarage

  

  
  const saveToLocalStorage = () => {
      const newObject = {
        questionId: exams[ questionIndex ].id,
        userAnswer: selcetedOption && exams[questionIndex].options[selcetedOption].id
    }
    setQuestionDetailsInStorage((prev) => prev ? [ ...prev, ...[ newObject ] ] : [ newObject ])
    return
  }

  const handleNavigation = (step: number) => {
    
    const newIndex = questionIndex + step
    if ( newIndex >= 0 && newIndex < exams.length )  
    {
      setQuestionIndex(newIndex)
      saveToLocalStorage()
      navigate(`/id/questions/${ newIndex + 1 }`);
      setSelectedOption(null)  
    } else if (newIndex === exams.length)
    {
      saveToLocalStorage()
      navigate(NAV_LINKS.result)
    }
  }
  
  const currentQuestion = exams[questionIndex]
  
  return (
    <ParticipantLayouts>
        <h1>{ currentQuestion.questions}</h1>
      { currentQuestion.options.map((option, index) => (
        <OptionsCmp
          index={ index }
          optionLetter={ option.id }
          selcetedOption={ selcetedOption }
          setSelectedOption={ setSelectedOption }
          optionAnswer={ option.answer }
          correctOption={ currentQuestion.correctOption } key={ index }
        />
      )) }
      <div className="flex items-center gap-5">
        <Button onClick={()=> handleNavigation(-1)}  isDisable={isAtFirstQuestion} >back</Button>
        <Button onClick={ ()=>handleNavigation(1) }  >{ isAtLastQuestion ? 'submit' : 'next'}</Button>
      </div>
    </ParticipantLayouts>

  )
}

