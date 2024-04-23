import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import itemsService from "../services/items.service";

function ItemsDetailPage(props) {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

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

  return (
    <div>
      {item && (
        <>
          <h1>{item.type}</h1>
          <img src={item.image} alt="image"></img>
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
    </div>
  );
}

export default ItemsDetailPage;
