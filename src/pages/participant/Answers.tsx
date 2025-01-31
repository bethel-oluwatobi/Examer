import { useGetParticipantSession } from "../../hooks/participant-hooks/useGetParticipantSession"
import { useQuestionLocalStorage } from "../../hooks/participant-hooks/useQuestionLocalStorage"
import { exams } from "../../shared/participants/constants"






const QuestionsReviewCmp = () => {
  const { questionDetailsInStorage } = useQuestionLocalStorage()
  if (!questionDetailsInStorage) return
  
  const questionReview = exams.map((exam) => {
  const storedQuestion = questionDetailsInStorage.find((q) => q.questionId === exam.id)
    
    return {
      examQuestions: exam.questions,
      options: exam.options.map((option) => (
        {
          id: option.id,
          answer: option.answer,
          isCorrect: option.id === exam.correctOption,
          isUserChoice:option.id === storedQuestion?.userAnswer
        }
      ))
    }
  })

  return (
    <div>
      { questionReview.map((question, index) => (
        <div key={index}>
          {question.examQuestions }
          <div>
            { question.options.map((option) => (  
              <div className={`flex items-center gap-2 p-2 rounded-md  ${option.isCorrect ? 'bg-green-500 text-white' : option.isUserChoice ? 'bg-red-500 text-white': 'bg-gray'}`} key={option.id}>
                  <div className="">{ option.id }</div>
                  <div>{option.answer}</div>
              </div>
          )) }
          </div>
        </div>
        
      ))}
    </div>
  )
  

}


export const Answers = () => {
  
  
  
  
  const participant = useGetParticipantSession()
  return (
    <div>
      <h1>Review Your Answers</h1>
       <QuestionsReviewCmp  />
    </div>

  )
  
}
