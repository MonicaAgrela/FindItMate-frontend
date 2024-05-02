import { useState, useEffect } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import itemsService from "../services/items.service";
function ItemsPage() {
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

  let category = [
    "keys",
    "wallet",
    "phone",
    "headphones",
    "shoes",
    "remote",
    "purse",
    "glasses",
    "umbrella",
    "camera",
    "bicycle",
    "laptop",
    "documents",
    "vehicles",
    "others",
  ];

  return (
    <div class="bg-white max-w-screen-lg mx-auto p-4 rounded-lg shadow-md">
      <label class="block text-center mb-4">
        Search Items
        <input
          id="search-bar"
          type="text"
          class="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items && (
          <>
            {items.map((oneItem) => {
              return (
                <Link
                  key={oneItem._id}
                  to={`/items/${oneItem._id}`}
                  class="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  <img
                    src={oneItem.image}
                    alt={oneItem.name}
                    class="w-full h-48 object-cover"
                  />
                  <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">{oneItem.name}</h3>
                    <p class="text-gray-700">{oneItem.description}</p>
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default ItemsPage;
