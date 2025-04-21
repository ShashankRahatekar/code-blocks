import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/mainlayout';
// import Home from '@/features/';
import ProblemDetailsPage from '@/features/problems/pages/ProblemDetails';
import ProblemListPage from '@/features/problems/pages/ProblemList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
    //   { index: true, element: <Home /> },
      { path: 'problems', element: <ProblemListPage /> },
      { path: 'problems/:problemId', element: <ProblemDetailsPage /> }
    ]
  }
]);
