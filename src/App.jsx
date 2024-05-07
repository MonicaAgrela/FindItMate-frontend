import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import HowItWorks from "./pages/HowItWorks";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AddItemsPage from "./pages/AddItemsPage";
import ItemsPage from "./pages/ItemsPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import CategoryItemsPage from "./pages/CategoryItemsPage";
import EditItemsPage from "./pages/EditItemsPage";
import MessagePage from "./pages/MessagePage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="bg-slate-900">
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

        <Route exact path="/items/:itemId" element={<ItemDetailsPage />} />

        <Route exact path="/items/edit/:itemId" element={<EditItemsPage />} />

        <Route exact path="/how-it-works" element={<HowItWorks />} />
        <Route
          path="/items/categories/:category"
          element={<CategoryItemsPage />}
        />

        <Route exact path="/items/messages/:itemId" element={<MessagePage />} />

        <Route
          exact
          path="/dashboard"
          element={
            <IsPrivate>
              <Dashboard />
            </IsPrivate>
          }
        />

        <Route
          exact
          path="/Submit-found-item"
          element={
            <IsPrivate>
              <AddItemsPage />
            </IsPrivate>
          }
        />

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
