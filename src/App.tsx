

import { Routes, Route } from "react-router-dom";
import { LandingLayout } from "./components/layouts/index.landing";
import { LoginLayout } from "./components/layouts/index.login"
import LandingPage from "./components/page/pageLayout";
import LoginPage from "./components/page/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingLayout>
            <LandingPage />
          </LandingLayout>
        }
      />

      <Route
        path="/login"
        element={
          <LoginLayout>
            <LoginPage />
          </LoginLayout>
        }
      />
    </Routes>
  );
}
