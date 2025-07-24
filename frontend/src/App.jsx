// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import AddUser from "./components/AddUser";

const App = () => {
  const location = useLocation();

  return (
   <>
  <LoginPage />
   </>
  );
};

export default App;
