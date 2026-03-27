import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  timeout: 30000,
});

export const analyzeSMS = (message) => API.post('/analyze-sms', { message });
export const analyzeUPI = (amount, frequency) => API.post('/analyze-upi', { amount, frequency });

export const analyzeVoice = (audioFile) => {
  const formData = new FormData();
  formData.append('audio', audioFile);
  return API.post('/analyze-voice', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const analyzeDeepfake = (mediaFile) => {
  const formData = new FormData();
  formData.append('media', mediaFile);
  return API.post('/analyze-deepfake', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export default API;
