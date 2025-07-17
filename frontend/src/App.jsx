// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />

      {/* Always show Landing page normally */}
      {location.pathname === "/" && (
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      )}

      {/* Show Login and Signup with animation */}
      {["/login", "/signup"].includes(location.pathname) && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
};

export default App;
