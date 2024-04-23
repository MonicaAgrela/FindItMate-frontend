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
    <div>
      {" "}
      <label>
        Search Items{" "}
        <input
          id="search-bar"
          type="text"
          /*onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}*/
        />
      </label>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {items && (
          <>
            {items.map((oneItem) => {
              return (
                <Link
                  key={oneItem._id}
                  to={`/items/${oneItem._id}`}
                  className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  <img
                    src={oneItem.image}
                    alt={oneItem.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {oneItem.name}
                    </h3>
                    <p className="text-gray-700">{oneItem.description}</p>
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
