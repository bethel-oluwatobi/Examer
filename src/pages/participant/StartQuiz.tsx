import { useForm } from "react-hook-form"
import { IconsCmp } from "../../components/IconsCmp"
import { Button } from "../../design_system/components/ui/Button"
import Input from "../../design_system/components/ui/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { LabelAndErrorCmp } from "../../design_system/app/form/FormInput/LabelAndErrorCmp"

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

export const StartQuiz = () => {
 // todo understand the schema buikder so i can use it to my requirement
 
  const { handleSubmit, register,formState:{errors} } = useForm<TStartQuizDetails>({ resolver: zodResolver(startQuizSchema) })
  
  const submit = (data:TStartQuizDetails)=> {
     console.log(data)
  }

  return (
    <div className="flex flex-col items-ceneter gap-10 pt-10">
      {/* header */}
      <div className="flex flex-col items-center gap-12">
        <h1 className="font-bold  text-[24px] align-middle  text-center text-balance">Welcome To Sunday School Quiz</h1>
        <IconsCmp icon="circleUserIcon" height="84" width="84" />
        <p className="font-semibold text-[20px] text-center text-balance text-[#6C757D]">Promotion Examination</p>
        <form onSubmit={handleSubmit(submit)}>
          <LabelAndErrorCmp errors={errors} name="fullname" register={register} type="text" />
          {/* we need to add a dropshadow to this text */}
          <Button>Start quiz</Button>
        </form>
      </div>
      {/* footer or instructions sections */ }
      <div className="flex items-center flex-col gap-5 ">
        <h3 className=" font-semibold text-[20px] text-[#7E858C] text-center">This is to to inform you that :</h3>
        <QuizInstructionCmp />
      </div>
    </div>
  )
}





