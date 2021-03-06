import AsyncStorage from '@react-native-community/async-storage';

export const USER_KEY = "user-key";
export const USER_NAME = "user-key";


export const onSignIn = async () => { await AsyncStorage.setItem(USER_KEY, 'User')}

export const onSignOut = async () => await AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};