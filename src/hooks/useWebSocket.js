import { useEffect, useState } from 'react';
import { createWebSocket } from '../services/websocket';

export function useWebSocket() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let socket;
    try {
      socket = createWebSocket(
        (event) => setMessages((prev) => [event, ...prev].slice(0, 20)),
        () => setMessages((prev) => [{ message: 'WebSocket connection error', timestamp: Date.now() }, ...prev])
      );
    } catch {
      setMessages([{ message: 'WebSocket unavailable', timestamp: Date.now() }]);
    }

    return () => {
      if (socket && socket.readyState < 2) socket.close();
    };
  }, []);

  return { messages };
}
