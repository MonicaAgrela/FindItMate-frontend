import { useState, useEffect } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import itemsService from "../services/items.service";
function ItemsPage() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

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

  useEffect(() => {
    if (query.trim() === "") {
      // If query is empty, fetch all items
      getAllItems();
    } else {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/api/items/category?search=${query}`
        )
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [query]);

  return (
    <div class="bg-white max-w-screen-lg mx-auto p-4 rounded-lg shadow-md">
      <label class="block text-center mb-4">
        Search Items
        <input
          id="search-bar"
          type="text"
          class="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
      </label>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {category.map((element) => {
        return (
          <Link to={`/items/categories/${element}`} key={element}>
            <div>{element}</div>
          </Link>
        );
      })}
      <div
        style={{
          display: `flex`,
          justifyContent: "center",
          padding: "10px",
          fontSize: "20px",
        }}
      ></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"></div>
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
