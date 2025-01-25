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
    questions: string;
    options: ({
        optionLetter: string;
        optionsAnswer: string;
        correct?: boolean;
    })[];
}[]

export const exams = [
    {
        questions: 'who Gave birth to Jesus',
        options: [ {
            optionLetter: 'A',
            optionsAnswer: 'hannah',
        },
        {
            optionLetter: 'B',
            optionsAnswer: 'mary',
            correct: true
        }, {
            optionLetter: 'C',
            optionsAnswer: 'jacob',
        }, {
            optionLetter: 'D',
            optionsAnswer: 'david',
        },
        ]
    },
    {
        questions: 'who Gave birth to Jesus',
        options: [ {
            optionLetter: 'A',
            optionsAnswer: 'hannah',
        },
        {
            optionLetter: 'B',
            optionsAnswer: 'mary',
            correct: true

        }, {
            optionLetter: 'C',
            optionsAnswer: 'jacob',
        }, {
            optionLetter: 'D',
            optionsAnswer: 'david',
        },
        ]
    },
    {
        questions: 'who is joseph Father',
        options: [ {
            optionLetter: 'A',
            optionsAnswer: 'hannah',
        },
        {
            optionLetter: 'B',
            optionsAnswer: 'mary',
        }, {
            optionLetter: 'C',
            optionsAnswer: 'jacob',
            correct: true
        }, {
            optionLetter: 'D',
            optionsAnswer: 'david',
        },
        ]
    }
] as TExams