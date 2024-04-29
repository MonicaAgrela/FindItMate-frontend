import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import messageService from "../services/message.service";

function MessagePage() {
  const messageRef = useRef();
  const [message, setMessage] = useState(null);
  const { itemId } = useParams();
  const [messageValue, setMessageValue] = useState("");

  const handleSubmit = (e) => {
    e?.preventDefault();
    const requestBody = {
      itemId,
      messageValue,
    };

    messageService
      .createMessage(requestBody)
      .then((res) => {
        console.log(res);
        getAllMessages();
        setMessageValue("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  // const clearInput = () => {
  //   messageRef.current.value = "";
  // };
  console.log(message);
  if (!message) {
    return (
      <>
        <input
          type="text"
          placeholder="Message"
          onChange={(e) => {
            setMessageValue(e.target.value);
          }}
        ></input>
        <button type="button" onClick={() => handleSubmit()}>
          Send
        </button>
      </>
    );
  }

  return (
    <div>
      <h1>MessagePage</h1>
      <form onSubmit={handleSubmit}>
        {message.messages.map((oneMessage) => (
          <div key={oneMessage._id}>
            <p>{oneMessage.sender.name}</p>
            <p>{oneMessage.message}</p>
          </div>
        ))}
        <input
          type="text"
          placeholder="Message"
          value={messageValue}
          onChange={(e) => {
            setMessageValue(e.target.value);
          }}
        ></input>
        <button type="button" onClick={() => handleSubmit()}>
          Send
        </button>
      </form>
    </div>
  );
}

export default MessagePage;
