import React, { useState, useEffect } from "react";
import { fetchQuizList } from "../../../lib/mockApi";

interface Activity {
  type: string;
  participants: number;
  duration: string;
}

export const ActivitiesTable: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadQuizSummary = async () => {
      setLoading(true);
      try {
        const quizList = await fetchQuizList();

        // Simulate a duration value (since it's not part of the quiz data)
        const calculatedActivities = (quizList as any[]).map((quiz) => ({
          type: quiz.type,
          participants: quiz.participants,
          duration: generateRandomDuration(), // Randomized for now
        }));

        setActivities(calculatedActivities);
      } catch (err) {
        setError("Failed to load activities.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadQuizSummary();
  }, []);

  const generateRandomDuration = (): string => {
    const durations = ["15s", "30s", "1min", "5min", "30min", "1hr", "2hr"];
    return durations[Math.floor(Math.random() * durations.length)];
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="p-4">
      <h2 className="text-lg font-semibold mb-4">Quiz Activities Summary</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Participants
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="border border-gray-300 px-4 py-2">
                {activity.type}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {activity.participants}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {activity.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
