import axios from "axios";
import jwtDecode from "jwt-decode";
import storage from "./storage";

export function setAuthToken(token: string) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    storageSetItem("jwtToken", token)
    return jwtDecode(token);
  }
  else {
    delete axios.defaults.headers.common["Authorization"];

    return null;
  }
}

export const storageSetItem = (key: string, data: any) => {
  storage.save({
    key: key,
    data: data,
    expires: null
  });
}

export const storageGetItem = (key: string) => {
  return storage
    .load({
      key: key,
    })
}

export const storageRemoveItem = (key: string) => {
   storage.remove({key})
}
 
export const storageClear = () => {
  storage.clearMap()
}