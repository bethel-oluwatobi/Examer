// this is where allThe pages would be connexted together via routing system

import { Route, Routes } from "react-router-dom"
import { StartQuiz,Answers,Questions, Result, Admin, CreateQuiz  } from "./participant/exports"
import { ParticipantLayouts } from "../layouts/participants/ParticipantLayouts"
// import { CreateQuiz } from "./participant/CkreateQuit/CreateQuiz"


// start quiz page
// questiins page
// result page
// answers page
// admin page
// CreateQuiz Page

export const AllRoutes = () => {
    return (
        <Routes >
            <Route path="/:id/start-quiz" element={ <ParticipantLayouts><StartQuiz /></ParticipantLayouts>}/>
                <Route path="/:id/questions/:id" element={ <Questions /> }/>
                <Route path="/:id/results" element={ <Result /> }/>
                <Route path="/:id/answers" element={ <Answers /> }/>
                <Route path="/:id/admin" element={<Admin />} />
                <Route path="/:id/create-quit" element={<CreateQuiz/>} />


        </Routes>
    )
}