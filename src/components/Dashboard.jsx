import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const Dashboard = () => {
  const [items, setItems] = useState([]);

  const { user } = useContext(AuthContext);
  const dashboardItems = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/user/${user._id}`
      );
      setItems(res.data.items);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    dashboardItems();
  }, []);

  return (
    <div className="max-w-lg mx-auto px-4 bg-white">
      <h4 className="text-2xl font-bold mb-4">Name: {user.name}</h4>
      <h4 className="text-2xl font-bold mb-4">Email: {user.email}</h4>
      <ul>
        {Array.isArray(items) &&
          items.map((item) => {
            return (
              <li key={item._id} className="mb-8">
                <h1 className="text-xl font-bold mb-2">{item.type}</h1>
                <img
                  src={`${item.image}`}
                  alt="image"
                  className="w-full mb-2"
                />
                <p className="text-gray-700 mb-2">{item.description}</p>
                <p className="text-gray-700 mb-2">Place: {item.place}</p>
                <p className="text-gray-700 mb-2">Location: {item.location}</p>
                <p className="text-gray-700 mb-2">Date: {item.date}</p>
                <p className="text-gray-700 mb-2">
                  Additional Information: {item.additionalInformation}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Dashboard;
