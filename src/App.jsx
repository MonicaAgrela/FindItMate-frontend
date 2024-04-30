import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import ItemsPage from "../pages/ItemsPage";
import IsAnon from "../components/IsAnon";
import IsPrivate from "../components/IsPrivate";
import HowItWorks from "../pages/HowItWorks";
import SignupPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import CategoryItemsPage from "../pages/CategoryItemsPage";
import ItemsDetailPage from "../pages/ItemsDetailPage";
import EditItemsPage from "../pages/EditItemsPage";
import MessagePage from "../pages/MessagePage";
import AddItemsPage from "../pages/AddItemsPage";
import Dashboard from "../components/Dashboard";
import ProfilePage from "../pages/ProfilePage";

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
        <Route exact path="/items/:itemId" element={<ItemsDetailPage />} />
        <Route exact path="/items/edit/:itemId" element={<EditItemsPage />} />
        <Route exact path="/how-it-works" element={<HowItWorks />} />
        <Route exact path="/items/messages/:itemId" element={<MessagePage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/profile/dashboard" element={<ProfilePage />} />
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
          path="/items/categories/:category"
          element={<CategoryItemsPage />}
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
        <Route exact path="/new-item" element={<AddItemsPage />} />
      </Routes>
    </div>
  );
}

export default App;
