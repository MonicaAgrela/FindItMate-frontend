import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaKey,
  FaWallet,
  FaMobileAlt,
  FaHeadphones,
  FaShoePrints,
  FaTv,
  FaMoneyBill,
  FaGlasses,
  FaUmbrella,
  FaCamera,
  FaBicycle,
  FaLaptop,
  FaFileAlt,
  FaCar,
  FaQuestionCircle,
} from "react-icons/fa";
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

  useEffect(() => {
    getAllItems();
  }, []);

  let categoryIcons = {
    keys: <FaKey />,
    wallet: <FaWallet />,
    phone: <FaMobileAlt />,
    headphones: <FaHeadphones />,
    shoes: <FaShoePrints />,
    remote: <FaTv />,
    purse: <FaMoneyBill />,
    glasses: <FaGlasses />,
    umbrella: <FaUmbrella />,
    camera: <FaCamera />,
    bicycle: <FaBicycle />,
    laptop: <FaLaptop />,
    documents: <FaFileAlt />,
    vehicles: <FaCar />,
    others: <FaQuestionCircle />,
  };

  useEffect(() => {
    if (query.trim() === "") {
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
    <div className="bg-white max-w-screen-lg mx-auto p-4 rounded-lg shadow-md">
      <label className="block text-center mb-4">
        Search Items
        <input
          id="search-bar"
          type="text"
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.keys(categoryIcons).map((category) => (
          <Link to={`/items/categories/${category}`} key={category}>
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition duration-300">
              {categoryIcons[category]}
              <span className="mt-2">{category}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {items &&
          items.map((oneItem) => (
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
                <h3 className="text-xl font-semibold mb-2">{oneItem.name}</h3>
                <p className="text-gray-700">{oneItem.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ItemsPage;
