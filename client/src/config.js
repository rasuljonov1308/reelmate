import Config from 'react-native-config';

export default {
  API_URL: Config.REACT_APP_API_URL,
  MAPS_API: Config.REACT_APP_GOOGLE_MAPS_API,
  DEBUG: Config.REACT_APP_DEBUG_MODE === 'true',
  
  // Boshqa sozlamalar...
  MAX_UPLOAD_SIZE: 50 * 1024 * 1024, // 50MB
};