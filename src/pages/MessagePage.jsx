import { useRef, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import messageService from "../services/message.service";
import { AuthContext } from "../context/auth.context";

function MessagePage() {
  /*const messageRef = useRef();*/
  const [message, setMessage] = useState(null);
  const { itemId } = useParams();
  const [messageValue, setMessageValue] = useState("");
  const { user } = useContext(AuthContext);
  const loggedInUserId = "user123"; // Replace "user123" with the actual logged-in user ID

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

  // console.log(message);
  if (!message) {
    return (
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="flex-grow overflow-auto">
          <div className="h-full flex items-center justify-center">
            <p>No messages yet</p>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex items-center">
          <input
            type="text"
            placeholder="Message"
            value={messageValue}
            className="border-b-2 border-gray-300 flex-grow focus:outline-none px-4 py-2"
            onChange={(e) => {
              setMessageValue(e.target.value);
            }}
          ></input>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
            onClick={() => handleSubmit()}
          >
            Send
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-grow overflow-auto">
        <h1 className="text-lg font-bold mb-4">MessagePage</h1>
        <div>
          {message.messages.map((oneMessage) => (
            <div
              key={oneMessage._id}
              className={`mb-4 flex ${
                oneMessage.sender._id === user?._id ? "justify-end" : "justify-start"
              }`}
            >
            <div className="flex flex-col">
              <p className="text-sm font-semibold mb-1">
                {oneMessage.sender.name}
              </p>
              <p
                className={`bg-white rounded-lg px-4 py-2 inline-block ${
                  oneMessage.sender._id === user?._id
                    ? "text-right  bg-green-400 self-end"
                    : "text-left bg-slate-200"
                }`}
              >
                {oneMessage.message}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex items-center">
        <input
          type="text"
          placeholder="Message"
          value={messageValue}
          className="border-b-2 border-gray-300 flex-grow focus:outline-none px-4 py-2"
          onChange={(e) => {
            setMessageValue(e.target.value);
          }}
        ></input>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
          onClick={() => handleSubmit()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default MessagePage;
