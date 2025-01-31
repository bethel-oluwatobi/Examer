

// on result page i want to be a ble to calculate score 

import { useResultHook } from "../../hooks/participant-hooks/useResultHook"
import { exams } from "../../shared/participants/constants"



// and display score
export const Result = () => {
  const { participants, totalScore } = useResultHook()
  const totalPoints = exams.length * 10
  return (
    <div>
       {`${participants?.fullname } totalScore ${totalScore}/${totalPoints}`}
    </div>
  )
}

