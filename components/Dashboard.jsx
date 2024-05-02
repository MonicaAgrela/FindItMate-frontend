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
    <div>
      <h4>Name: {user.name}</h4>
      <h4>Email: {user.email}</h4>
      <ul>
        {Array.isArray(items) &&
          items.map((item) => {
            return (
              <li key={item._id}>
                <h1>{item.type}</h1>
                <img src={`${item.image}`} alt="image"></img>
                <p>{item.description}</p>
                <p>{item.place}</p>
                <p>{item.location}</p>
                <p>{item.date}</p>
                <p>{item.additionalInformation}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Dashboard;
