import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import itemsService from "../services/items.service";
import axios from "axios";

function ItemsDetailPage() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  const navigate = useNavigate();

  const getItem = () => {
    const token = localStorage.getItem("authToken");
    itemsService
      .getItem(itemId)
      .then((response) => {
        const oneItem = response.data;
        setItem(oneItem);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getItem();
  }, []);

  const deleteItem = () => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/item/${itemId}`)
      .then(() => {
        navigate("/items");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {item && (
        <>
          <h1>{item.type}</h1>
          <img src={`${item.image}`} alt="image"></img>
          <p>{item.description}</p>
          <p>{item.place}</p>
          <p>{item.location}</p>
          <p>{item.date}</p>
          <p>{item.additionalInformation}</p>
        </>
      )}

      <Link to="/items">
        <button>Back to Items</button>
      </Link>

      <Link to={`/items/edit/${itemId}`}>
        <button>Edit Item</button>
      </Link>
      <Link to={`/items/messages/${itemId}`}>
        <button>Chat</button>
      </Link>
      <button onClick={deleteItem}>Delete Item</button>
    </div>
  );
}

export default ItemsDetailPage;
