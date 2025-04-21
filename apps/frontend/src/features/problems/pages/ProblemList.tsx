import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProblemService from '@services/problemsServices';
// import axios from 'axios';

import { Problem } from '@definitions/problems.types'; // shared type from definitions
// import './HomePage.css'; // (optional) or use tailwind/MUI

const HomePage = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const problems = await ProblemService.getProblems();
        console.log({problems});
        
        setProblems(problems);
      } catch (error) {
        console.error('Error fetching problems:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Coding Problems</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="p-2">Title</th>
            <th className="p-2">Difficulty</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{problem.title}</td>
              <td className="p-2 capitalize text-sm text-gray-600">{problem.difficulty || 'NA'}</td>
              <td className="p-2">
                <Link
                  to={`/problems/${problem.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Solve
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
