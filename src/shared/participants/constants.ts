export const NAV_LINKS = {
    startQuiz: '/1/start-quiz',
    questions: '/1/questions/1',
    answers: '/1/answers',
    result: '/1/results',
}


export const STORAGE_KEYS = {
    questionStorage: 'QUESTION_KEY'
}

export type TExams = {
    id: number
    questions: string;
    options: ({
        optionLetter: string;
        optionsAnswer: string;
    })[];
}[]

export const exams = [
    {
        id: 1,
        questions: 'who Gave birth to Jesus',
        options: [
            { id: 'A', answer: 'hannah', },
            { id: 'B', answer: 'mary', },
            { id: 'C', answer: 'jacob', },
            { id: 'D', answer: 'david', },
        ],
        correctOption: 'B'
    },
    {
        id: 2,
        questions: 'who Gave birth to Jesus',
        options: [
            { id: 'A', answer: 'hannah', },
            { id: 'B', answer: 'mary', },
            { id: 'C', answer: 'jacob', },
            { id: 'D', answer: 'david', },
        ],
        correctOption: 'B'
    },
    {
        id: 3,
        questions: 'who Gave birth to Jesus',
        options: [
            { id: 'A', answer: 'hannah', },
            { id: 'B', answer: 'mary', },
            { id: 'C', answer: 'jacob', },
            { id: 'D', answer: 'david', },
        ],
        correctOption: 'B'
    },
] as const