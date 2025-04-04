import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RouteWrapper from "../components/RouteWrapper";

function App() {
  return (
    <div>
      <Router>
        <RouteWrapper>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </RouteWrapper>
      </Router>
    </div>
  );
}

export default App;
