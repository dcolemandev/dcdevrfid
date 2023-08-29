import AsyncStorage from '@react-native-async-storage/async-storage';

export const init = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    token: "",
  },
  tags: [],
  locations: [],
  prevSessions: [],
  currentSession: {},
  updates: {
    play: ["You can start"],
    home: [],
    manage: [],
    settings: [],
  },
}

export const set = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // saving error
    console.log(error)
  }
};
 
export const setObj = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    // saving error
    console.log(error)
  }
};

export const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
    }
  } catch (error) {
    // error reading value
    console.log(error)
  }
};

export const getObj = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    // error reading value
    console.log(error)
  }
};

export const updateOne = async (key, value) =>{
  try{
    await AsyncStorage.mergeItem(key, value);
  }catch(error){
    console.log(error)
  }
}

