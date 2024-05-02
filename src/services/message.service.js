import axios from "axios";

class MessageService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/messages
  createMessage = (requestBody) => {
    return this.api.post("/api/messages", requestBody);
  };

  // GET /api/messages
  getAllMessages = (id) => {
    return this.api.get(`/api/messages/${id}`);
  };

  // PUT /api//message/:messageId
  updateMessage = (requestBody) => {
    return this.api.put(`/api/message/:messageId`, requestBody);
  };

  // DELETE /api//message/:messageId
  deleteMessage = () => {
    return this.api.delete(`/api/message/:messageId`);
  };
}

const messageService = new MessageService();

export default messageService;
