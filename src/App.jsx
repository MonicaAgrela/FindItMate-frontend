import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ItemsPage from "./pages/ItemsPage";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import HowItWorks from "./pages/HowItWorks";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/items"
          element={
            <IsPrivate>
              <ItemsPage />
            </IsPrivate>
          }
        />
        <Route exact path="/how-it-works" element={<HowItWorks />} />
        <Route
          exact
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
