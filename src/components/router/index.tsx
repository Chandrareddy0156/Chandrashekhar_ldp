import { createBrowserRouter, Navigate } from "react-router-dom";

import CandidateDetailsPage from "../pages/CandidateDetailsPage";
import AdverseActionPage from "../pages/AdverseActionPage";
import SignupPage from "../pages/SignupPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signup" replace />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/candidate/:id",
    element: <CandidateDetailsPage />,
  },
  {
    path: "/adverse-action/:id",
    element: <AdverseActionPage />,
  },
]);
