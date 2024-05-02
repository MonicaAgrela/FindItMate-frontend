import { useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import itemsService from "../services/items.service";

function AddItemsPage() {
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      type,
      imageUrl,
      description,
      place,
      location,
      date,
      additionalInformation,
    };

    itemsService
      .createItem(requestBody)
      .then((response) => {
        console.log(response);
        // Reset the state
        setType("");
        setImage("");
        setDescription("");
        setPlace("");
        setLocation("");
        setDate("");
        setAdditionalInformation("");

        //props.refreshItems();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [imageUrl, setImageUrl] = useState(null);

  const handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    axios
      .post(` ${import.meta.env.VITE_API_URL}/api/upload`, uploadData)
      .then((response) => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        //setImageUrl(response.data.fileUrl);
        console.log(response.data.fileUrl[0].path);
        setImageUrl(response.data.fileUrl[0].path);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="p-8 bg-white rounded-lg shadow-md sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 className="text-2xl font-bold mb-4">AddItemsPage</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Type:</span>
            <select
              onChange={(e) => setType(e.target.value)}
              className="form-select mt-1 block w-full"
            >
              <option value="keys">Keys</option>
              <option value="wallet">Wallet</option>
              <option value="phone">Phone</option>
              <option value="headphones">Headphones</option>
              <option value="shoes">Shoes</option>
              <option value="remote">Remote</option>
              <option value="purse">Purse</option>
              <option value="glasses">Glasses</option>
              <option value="umbrella">Umbrella</option>
              <option value="camera">Camera</option>
              <option value="bicycle">Bicycle</option>
              <option value="laptop">Laptop</option>
              <option value="documents">Documents</option>
              <option value="vehicles">Vehicles</option>
              <option value="others">Others</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Image:</span>
            <input
              name="image"
              type="file"
              onChange={(e) => {
                handleFileUpload(e);
              }}
              value={image}
              className="form-input mt-1 block w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Description:</span>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea mt-1 block w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Place:</span>
            <select
              onChange={(e) => setPlace(e.target.value)}
              className="form-select mt-1 block w-full"
            >
              <option value="Street">Street</option>
              <option value="Park/Zoo">Park/Zoo</option>
              <option value="Cinema">Cinema</option>
              <option value="Stadium">Stadium</option>
              <option value="Bar">Bar</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Taxi">Taxi</option>
              <option value="Bus">Bus</option>
              <option value="Train">Train</option>
              <option value="Plane">Plane</option>
              <option value="Airport">Airport</option>
              <option value="Hotel">Hotel</option>
              <option value="Museum">Museum</option>
              <option value="Shopping Center">Shopping Center</option>
              <option value="Educational Institute">
                Educational Institute
              </option>
              <option value="Hospital">Hospital</option>
              <option value="Pet Services">Pet Services</option>
              <option value="Gas Station">Gas Station</option>
              <option value="Others">Others</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Location:</span>
            <input
              name="location"
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              className="form-input mt-1 block w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Date:</span>
            <input
              name="date"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className="form-input mt-1 block w-full border border-gray-300 rounded-md"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Additional Information:</span>
            <textarea
              name="additionalInformation"
              onChange={(e) => setAdditionalInformation(e.target.value)}
              value={additionalInformation}
              className="form-textarea mt-1 block w-full border border-gray-300 rounded-md"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItemsPage;
