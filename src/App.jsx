import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route  exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/items"
          element={
            <IsPrivate>
              <ItemsPage />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
