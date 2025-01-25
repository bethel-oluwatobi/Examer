import { useNavigate } from "react-router-dom"
import { Fields, FormSchema } from "../../components/FormSchema/FormSchema"
import { IconsCmp } from "../../components/IconsCmp"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Storage } from "../../lib/stoarge"
import { NAV_LINKS } from "../../shared/participants/constants"
import { z } from "zod"


const QuizInstructionCmp = () => {

  const quizInstructions = [
    'The quiz must be completed within the allotted time (e.g., 10 minutes).',
    'Unanswered questions will be marked as incorrect after the time expires.',
    'Participants must complete the quiz without external assistance, including books, notes, or devices.',
    'A stable internet connection is required throughout the quiz duration',
    'The quiz will auto-submit when the time expires.'
  ]  
  return (
    <div className="flex flex-col  items-center gap-5">
        {quizInstructions.map((quizInstruction, index) => (
          <p key={index} className="text-balance text-center font-normal text-[16px]">{quizInstruction}</p>
        ))}
    </div>
  )
}

type TStartQuizDetails = {
  fullname:string
}

const startQuizSchema = z.object({
  fullname:z.string().min(1)
})

const START_QUIZ_FIELD:[Fields] = [ { name: 'fullname', type: "text",} ]
export const STORAGE_KEY = 'Partiipant-Details'

export const StartQuizView = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<TStartQuizDetails>({ resolver: zodResolver(startQuizSchema) })
    const naviagate = useNavigate()
   
    const submit = (data: TStartQuizDetails) => {
        Storage.save(STORAGE_KEY, data)
        naviagate(NAV_LINKS.questions)
    }
    

    return (
        <div className="flex flex-col items-ceneter gap-10 pt-10">
        {/* header */}
        <div className="flex flex-col items-center gap-12">
            <h1 className="font-bold  text-[24px] align-middle  text-center text-balance">Welcome To Sunday School Quiz</h1>
            <IconsCmp icon="circleUserIcon" height="84" width="84" />
            <p className="font-semibold text-[20px] text-center text-balance text-[#6C757D]">Promotion Examination</p>
        <FormSchema error={errors} fields={START_QUIZ_FIELD} register={register} submit={handleSubmit(submit)} />
        </div>
        {/* footer or instructions sections */ }
        <div className="flex items-center flex-col gap-5 ">
            <h3 className=" font-semibold text-[20px] text-[#7E858C] text-center">This is to to inform you that :</h3>
            <QuizInstructionCmp />
        </div>
        </div>
    )
}
