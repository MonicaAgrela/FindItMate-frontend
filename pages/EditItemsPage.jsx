import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditItemsPage(props) {
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");

  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/items/${itemId}`)
      .then((response) => {
        const oneItem = response.data;
        setType(oneItem.type);
        setImage(oneItem.image);
        setDescription(oneItem.description);
        setPlace(oneItem.place);
        setLocation(oneItem.location);
        setDate(oneItem.date);
        setAdditionalInformation(oneItem.additionalInformation);
      })
      .catch((error) => console.log(error));
  }, [itemId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      type,
      image,
      description,
      place,
      location,
      date,
      additionalInformation,
    };

    axios
      .put(`${import.meta.env.VITE_API_URL}/api/items/${itemId}`, requestBody)
      .then(() => {
        navigate(`/items/${itemId}`);
      });
  };

  const deleteItem = () => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/items/${itemId}`)
      .then(() => {
        navigate("/items");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit the Item</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Type:</label>
        <select onChange={(e) => setType(e.target.value)}>
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

        <label>
          Image:
          <input
            name="image"
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
          />
        </label>

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Place:</label>
        <select onChange={(e) => setPlace(e.target.value)}>
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
          <option value="Educational Institute">Educational Institute</option>
          <option value="Hospital">Hospital</option>
          <option value="Pet Services">Pet Services</option>
          <option value="Gas Station">Gas Station</option>
          <option value="Others">Others</option>
        </select>

        <label>
          Location:
          <input
            name="location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
          />
        </label>

        <label>
          Date:
          <input
            name="date"
            type="Date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
          />
        </label>

        <label>
          Additional Information:
          <textarea
            name="additionalInformation"
            type="text"
            onChange={(e) => setAdditionalInformation(e.target.value)}
            value={additionalInformation}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
          />
        </label>

        <button type="submit">Update Item</button>
      </form>

      <button onClick={deleteItem}>Delete Item</button>
    </div>
  );
}

export default EditItemsPage;
