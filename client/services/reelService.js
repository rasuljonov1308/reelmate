import axios from 'axios';

const API_URL = 'http://your-backend-api/reels';

export const fetchReels = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Reels yuklashda xato:', error);
    return [];
  }
};

export const uploadReel = async (videoData) => {
  const formData = new FormData();
  formData.append('video', videoData);
  
  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};