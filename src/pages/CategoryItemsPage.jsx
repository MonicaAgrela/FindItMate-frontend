import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CategoryItemsPage() {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  let staticItems = {
    keys: {
      item: "Keys",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211943/items-gallery/urkttv3vrm6rmwnudjbn.jpg",
      description: "Set of keys",
      place: "Educational Institute",
      location: "Library Room 345",
      date: "2024-05-02T19:33:31.439+00:00",
      additionalInformation: "Found on the desk",
    },
    wallet: {
      item: "Wallet",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211943/items-gallery/f63kqclsjujlhter6vgv.jpg",
      description: "Wallet",
      place: "Educational Institute",
      location: "Library Room 345",
      date: "2024-05-02T19:33:31.439+00:00",
      additionalInformation: "Found under the chair",
    },
    phone: {
      item: "Phone",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/slvvh7kpwfeuv0drinpw.jpg",
      description: "Phone",
      place: "Educational Institute",
      location: "Library Room 345",
      date: "2024-05-02T19:33:31.439+00:00",
      additionalInformation: "Found on the table",
    },
    headphones: {
      item: "Headphones",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211943/items-gallery/vmrkzsr6x0lbtagrmkb1.avif",
      description: "Headphones",
      place: "Educational Institute",
      location: "Library Room 345",
      date: "2024-05-02T19:33:31.439+00:00",
      additionalInformation: "Found on the shelf",
    },
    shoes: {
      item: "Shoes",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211943/items-gallery/vr0kqhc25phfzbdmprja.webp",
      description: "Pair of shoes",
      place: "Educational Institute",
      location: "Hallway",
      date: "2024-05-02T19:33:31.446+00:00",
      additionalInformation: "Found near the entrance",
    },
    remote: {
      item: "Remote",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/ibdn8pcx51ln1sqhbuh2.webp",
      description: "Remote control",
      place: "Educational Institute",
      location: "Classroom 101",
      date: "2024-05-02T19:33:31.449+00:00",
      additionalInformation: "Found under the desk",
    },
    purse: {
      item: "Purse",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/wpmh6gwgkcvsslb9clna.jpg",
      description: "Purse",
      place: "Educational Institute",
      location: "Cafeteria",
      date: "2024-05-02T19:33:31.451+00:00",
      additionalInformation: "Found on the table",
    },
    glasses: {
      item: "Glasses",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/mqwmoy1obpggaz0ptpuw.webp",
      description: "Glasses",
      place: "Educational Institute",
      location: "Lecture Hall",
      date: "2024-05-02T19:33:31.452+00:00",
      additionalInformation: "Found on the seat",
    },
    umbrella: {
      item: "Umbrella",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/yfkhxwku57ytfoo4eg2e.jpg",
      description: "Umbrella",
      place: "Educational Institute",
      location: "Main Entrance",
      date: "2024-05-02T19:33:31.454+00:00",
      additionalInformation: "Found leaning against the wall",
    },
    camera: {
      item: "Camera",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/jdf927ar6nbkrzjrvovj.jpg",
      description: "Camera",
      place: "Educational Institute",
      location: "Photography Lab",
      date: "2024-05-02T19:33:31.455+00:00",
      additionalInformation: "Found on the table",
    },
    bicycle: {
      item: "Bicycle",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/bidgz8ig4cxhn0x3hjye.jpg",
      description: "Bicycle",
      place: "Educational Institute",
      location: "Bike Rack",
      date: "2024-05-02T19:33:31.456+00:00",
      additionalInformation: "Found chained to the rack",
    },
    laptop: {
      item: "Laptop",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/ukl57jgki3ze8m0twztu.avif",
      description: "Laptop",
      place: "Educational Institute",
      location: "Computer Lab",
      date: "2024-05-02T19:33:31.456+00:00",
      additionalInformation: "Found on the desk",
    },
    documents: {
      item: "Documents",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/jzkpagfnkiwylludki4k.webp",
      description: "Documents",
      place: "Educational Institute",
      location: "Office",
      date: "2024-05-02T19:33:31.457+00:00",
      additionalInformation: "Found in the filing cabinet",
    },
    vehicles: {
      item: "Vehicles",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/oejnerwgmfliaklroo5d.jpg",
      description: "Vehicle",
      place: "Educational Institute",
      location: "Parking Lot",
      date: "2024-05-02T19:33:31.458+00:00",
      additionalInformation: "Found parked in space 23",
    },
    others: {
      item: "Others",
      image:
        "https://res.cloudinary.com/duc0yhoo4/image/upload/v1714211944/items-gallery/kji0ifimshekppsrsnwo.png",
      description: "Miscellaneous item",
      place: "Educational Institute",
      location: "Library Room 345",
      date: "2024-05-02T19:33:31.458+00:00",
      additionalInformation: "Unknown item, found in the classroom",
    },
  };

  useEffect(() => {
    if (category) {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/api/items/category?type=${category}`
        )
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Category buttons */}
          {Object.keys(staticItems).map((key) => (
            <Link key={key} to={`/items/categories/${key}`}>
              <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-2 hover:bg-gray-200 transition duration-300">
                <img
                  src={staticItems[key].image}
                  alt={staticItems[key].item}
                  className="w-10 h-10 mb-2 rounded-full object-cover"
                />
                <span className="text-xs">{staticItems[key].item}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white p-4 rounded-md shadow-md w-full flex justify-center items-center">
          {category && (
            <div className="max-w-md">
              <h2 className="text-lg font-semibold text-center mb-2">
                {staticItems[category].item}
              </h2>
              <img
                src={staticItems[category].image}
                alt={staticItems[category].item}
                className="mt-2 rounded-md object-cover w-full h-auto" // Adjusted image size
              />
              <p className="mt-2 text-center">
                Description: {staticItems[category].description}
              </p>
              <p className="text-center">
                Place: {staticItems[category].place}
              </p>
              <p className="text-center">
                Location: {staticItems[category].location}
              </p>
              <p className="text-center">
                Date: {new Date(staticItems[category].date).toLocaleString()}
              </p>
              <p className="text-center">
                Additional Information:{" "}
                {staticItems[category].additionalInformation}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded-md shadow-md">
                <h2 className="text-lg font-semibold">{item.item}</h2>
                <img
                  src={item.image}
                  alt={item.item}
                  className="mt-2 mb-4 rounded-md object-cover w-full h-48"
                />
                <Link
                  to={`/items/${item._id}`}
                  className="text-blue-500 hover:underline"
                >
                  See Item
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-4">
              No items found for the selected category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryItemsPage;
