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
    participants: Participant[];
    status: "ongoing" | "ended";
  }
  
  // Mock quiz data (acts as a database)
  let quizData: Quiz[] = [
    {
      id: "001",
      type: "Math",
      creator: "Admin",
      participants: [
        { id: "p1", name: "John Doe", ip: "192.168.1.1", input: "Answer A" },
        { id: "p2", name: "Jane Smith", ip: "192.168.1.2", input: "Answer B" },
      ],
      status: "ongoing",
    },
    {
      id: "002",
      type: "Science",
      creator: "Admin",
      participants: [
        { id: "p3", name: "Alice Brown", ip: "192.168.1.3", input: "Answer C" },
      ],
      status: "ongoing",
    },
    {
      id: "003",
      type: "History",
      creator: "Staff",
      participants: [],
      status: "ended",
    },
  ];
  
  // Fetch all quizzes
  export const fetchQuizList = async (): Promise<Quiz[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...quizData]), 500);
    });
  };
  
  // Fetch quiz by ID
  export const fetchQuizById = async (quizId: string): Promise<Quiz | null> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const quiz = quizData.find((q) => q.id === quizId);
        quiz
          ? resolve(quiz)
          : reject(new Error(`Quiz with ID ${quizId} not found`));
      }, 300);
    });
  };
  
  // Cancel a quiz
  export const cancelQuizForUser = async (quizId: string) => {
    return new Promise<{ success: boolean; message: string }>(
      (resolve, reject) => {
        setTimeout(() => {
          const index = quizData.findIndex((quiz) => quiz.id === quizId);
          if (index !== -1) {
            quizData = quizData.filter((quiz) => quiz.id !== quizId); // Remove quiz
            resolve({
              success: true,
              message: `Quiz ${quizId} has been canceled.`,
            });
          } else {
            reject(new Error(`Quiz with ID ${quizId} not found.`));
          }
        }, 300);
      }
    );
  };
  
  // Get quiz statistics
  export const getQuizStatistics = async () => {
    return new Promise<{ ongoing: number; ended: number; total: number }>(
      (resolve) => {
        setTimeout(() => {
          const ongoing = quizData.filter(
            (quiz) => quiz.status === "ongoing"
          ).length;
          const ended = quizData.filter((quiz) => quiz.status === "ended").length;
          const total = quizData.length;
          resolve({ ongoing, ended, total });
        }, 400);
      }
    );
  };
  