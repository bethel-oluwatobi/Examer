// this is where allThe pages would be connexted together via routing system

import { Route, Routes } from "react-router-dom"
import { StartQuiz,Answers,Questions, Result } from "./participant/exports"
import { ParticipantLayouts } from "../layouts/participants/ParticipantLayouts"


// start quiz page
// questiins page
// result page
// answers page

export const AllRoutes = () => {
    return (
        <Routes >
            <Route path="/:id/start-quiz" element={ <ParticipantLayouts><StartQuiz /></ParticipantLayouts>}/>
                <Route path="/:id/questions" element={ <Questions /> }/>
                <Route path="/:id/results" element={ <Result /> }/>
                <Route path="/:id/answers" element={ <Answers /> }/>
        </Routes>
    )
}