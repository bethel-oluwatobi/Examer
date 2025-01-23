import { IconsCmp } from "../../components/IconsCmp"
import Input from "../../design_system/components/ui/Input"

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

export const StartQuiz = () => {

  return (
    <div className="flex flex-col items-ceneter gap-10 pt-10">
      {/* header */}
      <div className="flex flex-col items-center gap-12">
        <h1 className="font-bold  text-[24px] align-middle  text-center text-balance">Welcome To Sunday School Quiz</h1>
        <IconsCmp icon="circleUserIcon" height="84" width="84" />
        <p className="font-semibold text-[20px] text-center text-balance text-[#6C757D]">Promotion Examination</p>
        <form>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="fullname" className="capitalize font-medium text-[24px] text-[#9A9A9B] ">fullname</label>
            <Input type="text" name="details"   />
          </div>
          {/* we need to add a dropshadow to this text */}
          <button className="w-full mt-5 h-[52px] rounded-[16px] font-semibold text-[20px] text-[#FFFFFF]   bg-[#28A745]">start quiz</button>
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





