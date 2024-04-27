import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import messageService from "../services/message.service";

function MessagePage() {
  const messageRef = useRef();
  const [message, setMessage] = useState(null);
  const { itemId } = useParams();

  const getAllMessages = () => {
    messageService
      .getAllMessages(itemId)
      .then((response) => setMessage(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllMessages();
  }, [itemId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInput();
  };

  const clearInput = () => {
    messageRef.current.value = "";
  };
  console.log(message);
  if (!message) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h1>MessagePage</h1>
      {message.messages.map((oneMessage) => (
        <div key={oneMessage._id}>
          <p>{oneMessage.sender.name}</p>
          <p>{oneMessage.message}</p>
        </div>
      ))}
      <input type="text" placeholder="Message"></input>
      <button onClick={() => handleSubmit()}>Send</button>
    </div>
  );
}

export default MessagePage;
