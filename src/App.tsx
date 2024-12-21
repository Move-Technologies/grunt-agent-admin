import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
import CommonLayout from "./layouts/CommonLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import LoginPage from "./pages/sign-in";
import { lazy } from "react";
const RunAgentPage = lazy(() => import("./pages/run-agent"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/run-agent" element={<RunAgentPage />} />
          </Route>
          <Route path="/sign-in" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
