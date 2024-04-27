import { useState } from "react";
import {useNavigate} from "react-router-dom"

function MessagePage() {
  /*const [message, setMessage] = useState([]);
  const[user, setUser] = useState(undefined)
  const navigate = useNavigate()

  useEffect(async()=>{
    if(!localStorage.getItem("chat-user")){
      navigate("/login")
    } else {
      setUser( await JSON.parse(localStorage.getItem("chat-user")))
    }
  },[])

  
 

  const requestBody = { message };

  message
    .createMessage(requestBody)
    .then((res) => {
      console.log(res);
      setMessage("");
    })
    .catch((err) => {
      console.log(err);
    });*/

  return <div>MessagePage</div>;
}

export default MessagePage;
