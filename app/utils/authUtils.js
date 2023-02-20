import EncryptedStorage from 'react-native-encrypted-storage';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const storeUserSession = async payload => {
  try {
    await EncryptedStorage.setItem('user_session', JSON.stringify(payload));

    if (payload?.id_token) {
      let jwtTokenJson = jwtDecode(payload.id_token);
      await AsyncStorage.setItem('user_info', JSON.stringify(jwtTokenJson));
      axios.defaults.headers.Authorization = 'Bearer ' + payload.id_token;
    }
  } catch (error) {
    console.error(error);
  }
};
