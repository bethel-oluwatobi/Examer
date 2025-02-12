interface Participant {
  id: string;
  name: string;
  ip: string;
  input: string;
}

interface Quiz {
  id: string;
  type: string;
  creator: string;
  status: "Ongoing" | "Ended";
  participants: Participant[];
}

const mockQuizzes: Quiz[] = [
  {
    id: "1",
    type: "Math",
    creator: "Admin",
    status: "Ongoing",
    participants: [
      { id: "p1", name: "John Doe", ip: "192.168.1.1", input: "Answer A" },
    ],
  },
  {
    id: "2",
    type: "Science",
    creator: "Admin",
    status: "Ended",
    participants: [
      { id: "p2", name: "Jane Doe", ip: "192.168.1.2", input: "Answer B" },
    ],
  },
];

export const fetchQuizList = async (): Promise<Quiz[]> => {
  return mockQuizzes;
};

export const fetchQuizById = async (quizId: string): Promise<Quiz | null> => {
  console.log("Fetching quiz by ID:", quizId);
  if (!quizId || quizId === ":id") {
    console.error("Invalid quiz ID received:", quizId);
    return null;
  }
  const quiz = mockQuizzes.find((q) => q.id === quizId);
  if (!quiz) {
    console.error("Quiz not found in mock API:", quizId);
    return null;
  }
  return quiz;
};

export const cancelQuizForUser = async (quizId: string): Promise<void> => {
  const quizIndex = mockQuizzes.findIndex((q) => q.id === quizId);
  if (quizIndex !== -1) {
    mockQuizzes[quizIndex].status = "Ended";
    console.log("Quiz canceled successfully:", quizId);
  } else {
    console.error("Quiz not found for cancellation:", quizId);
  }
};
