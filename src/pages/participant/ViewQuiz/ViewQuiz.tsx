import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchQuizById, cancelQuizForUser } from "../../../lib/mockApi";

export const ViewQuiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadQuizDetails = async () => {
      try {
        const fetchedQuiz = await fetchQuizById(id!);
        setQuiz(fetchedQuiz);
      } catch (err) {
        setError("Quiz not found.");
      } finally {
        setLoading(false);
      }
    };
    loadQuizDetails();
  }, [id]);

  const handleCancelQuiz = async () => {
    if (!quiz) return;
    try {
      await cancelQuizForUser(quiz.id);
      navigate("/dashboard");
    } catch (err) {
      console.error("Error canceling quiz:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{quiz.type} Quiz</h2>
      <p>Created by: {quiz.creator}</p>
      <p>Status: {quiz.status}</p>
      <h3 className="text-lg font-bold mt-4">Participants</h3>
      {quiz.participants && quiz.participants.length > 0 ? (
        <ul>
          {quiz.participants.map((participant: any) => (
            <li key={participant.id} className="p-2 border rounded my-2">
              <p>
                <strong>Name:</strong> {participant.name}
              </p>
              <p>
                <strong>IP:</strong> {participant.ip}
              </p>
              <p>
                <strong>Input:</strong> {participant.input}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No participants yet.</p>
      )}
      console.log("Participants data:", quiz.participants);
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleCancelQuiz}
      >
        Cancel Quiz
      </button>
    </div>
  );
};
