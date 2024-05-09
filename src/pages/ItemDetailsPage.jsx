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
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="p-8 bg-white rounded-lg shadow-md sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2">
        {item && (
          <>
            <h1 className="text-2xl font-bold mb-4">{item.type}</h1>
            <div className="max-w-full max-h-screen overflow-hidden rounded-lg">
              <img
                src={`${item.image}`}
                alt="image"
                className="mb-4 w-full"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              ></img>
            </div>
            <p className="mb-2">{item.description}</p>
            <p className="mb-2">{item.place}</p>
            <p className="mb-2">{item.location}</p>
            <p className="mb-2">{item.date}</p>
            <p className="mb-4">{item.additionalInformation}</p>
          </>
        )}
        <div className="flex space-x-4 mb-4">
          <Link to="/items">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Back to Items
            </button>
          </Link>

          <Link to={`/items/edit/${itemId}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit Item
            </button>
          </Link>

          <Link to={`/items/messages/${itemId}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Chat
            </button>
          </Link>

          <button
            onClick={deleteItem}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Item Add 
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemsDetailPage;
