import { TypeLogin } from "../../Types/Login";
import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/api";
import { useDispatch } from "react-redux";
import storage from "../../utils/storage";



export const login = (credentials: TypeLogin, remember: boolean|undefined) => {
  return client
    .post("/api/auth/login", credentials)
    .then((accessToken: any) => {

      setAuthorizationHeader(accessToken.accessToken);
      
      
      if (remember) {
        storage.set("auth", accessToken.accessToken);
      }
      
      if(!remember){
        storage.remove("auth");
      }
      return {accessToken:accessToken.accessToken}
    });
     
};
    

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove("auth");
  });
};

export const relogin = () => {
  const accessToken = storage.get("auth");
  

  setAuthorizationHeader(accessToken.accessToken);
};
