const wsUrl = import.meta.env.VITE_WS_URL || 'ws://localhost:8000/ws';

export function createWebSocket(onMessage, onError) {
  const socket = new WebSocket(wsUrl);
  socket.onmessage = (event) => {
    try {
      onMessage(JSON.parse(event.data));
    } catch {
      onMessage({ message: event.data, timestamp: Date.now() });
    }
  };
  socket.onerror = onError;
  return socket;
}
