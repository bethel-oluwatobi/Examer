import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuizList } from "../../../lib/mockApi"; 

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [ongoing, setOngoing] = useState(0);
  const [ended, setEnded] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const quizList = await fetchQuizList();
        const ongoingQuizzes = quizList.filter(q => q.status === "ongoing").length;
        const endedQuizzes = quizList.filter(q => q.status === "ended").length;

        setOngoing(ongoingQuizzes);
        setEnded(endedQuizzes);
        setTotal(quizList.length);
      } catch (error) {
        console.error("Failed to fetch quiz data", error);
      } finally {
        setLoading(false);
      }
    };

    loadQuizData();
  }, []);

  return (
    <section className="p-4">
      <div className="text-center bg-blue-50 rounded-lg shadow-md p-4">
        <h3 className="text-xl font-medium">Quiz Summary</h3>
        <p>Ongoing: {loading ? "Loading..." : ongoing}</p>
        <p>Ended: {loading ? "Loading..." : ended}</p>
        <p>Total: {loading ? "Loading..." : total}</p>
      </div>
    </section>
  );
};
