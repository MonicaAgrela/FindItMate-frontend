import { useState, useEffect } from "react";
//import axios from "axios";
//import { Link } from "react-router-dom";
import itemsService from "../services/items.service";

function ProfilePage() {
  const [items, setItems] = useState([]);

  const getAllItems = () => {
    itemsService
      .getAllItems()
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
}

export default ProfilePage;
