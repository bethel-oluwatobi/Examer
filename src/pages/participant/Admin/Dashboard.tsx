import React from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateQuiz = () => {
    navigate("/:id/create-quiz");
  };
  const handleAnswers = () => {
    navigate("/:id/answers");
  };
  return (
    <section className="lg:py-20 lg:px-20 p-4">
      <div className="lg:py-20 lg:px-1 p-4 text-center bg-blue-50 rounded-lg shadow-md">
        <div className="flex px-5 justify-around mb-4">
          <div className="mr-10">
            <h3 className="text-sm lg:text-xl font-medium">Ongoing</h3>
            <p className="text-lg lg:text-lg font-bold">05</p>
          </div>
          <div>
            <h3 className="text-sm lg:text-xl  font-medium">Ended</h3>
            <p className="text-lg lg:text-lg font-bold">04</p>
          </div>
          <div className="ml-10">
            <h3 className="text-sm lg:text-xl  font-medium">Total</h3>
            <p className="text-lg lg:text-lg font-bold">10</p>
          </div>
        </div>
      </div>
      <div className="space-x-4 mt-9 justify-between flex">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={handleCreateQuiz}
        >
          Create Quiz
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={handleAnswers}
        >
          View Quiz
        </button>
      </div>
    </section>
  );
};
