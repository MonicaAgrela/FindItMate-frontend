import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CategoryItemsPage() {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    if (category) {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/api/items/category?type=${category}`
        )
        .then((response) => {
          console.log(response.data);
          setItems(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [category]);

  return (
    <div
      className="flex flex-col items-center space-y-4 mt-30"
      style={{ backgroundColor: "#FAFAF9", paddingTop: "100px" }}
    >
      {
        <div className="flex space-x-4">
          {/* Category buttons */}
          {[
            {
              type: "keys",
            },
            {
              type: "wallet",
            },
            {
              type: "phone",
            },
            {
              type: "headphones",
            },
            {
              type: "shoes",
            },
            {
              type: "remote",
            },
            {
              type: "purse",
            },
            {
              type: "glasses",
            },
            {
              type: "umbrella",
            },
            {
              type: "camera",
            },
            {
              type: "bicycle",
            },
            {
              type: "laptop",
            },
            {
              type: "documents",
            },
            {
              type: "vehicles",
            },
            {
              type: "others",
            },
          ].map((category) => (
            <Link key={category.type} to={`/items/categories/${category.type}`}>
              {category.icon}
              <span>{category.type}</span>
            </Link>
          ))}
        </div>
      }

      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display items */}
          {items.map((item) => {
            return (
              <div key={item._id} className="bg-white p-4 rounded-md shadow-md">
                <h2 className="text-lg font-semibold">{item.item}</h2>
                <img
                  src={item.image}
                  alt={CategoryItemsPage.name}
                  className="mt-2 mb-4 rounded-md object-cover w-full h-48"
                />

                <Link
                  to={`/items/${item._id}`}
                  className="text-blue-500 hover:underline"
                >
                  See Item
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">
          No items found for the selected category.
        </p>
      )}
    </div>
  );
}

export default CategoryItemsPage;
