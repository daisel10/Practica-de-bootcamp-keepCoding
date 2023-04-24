
import client,{
    removeAuthorizationHeader,
    setAuthorizationHeader,
} from "../API/client.js"
import storage from "./storage.js"  


export const login = (credentials,remember)  => {
    return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
      setAuthorizationHeader(accessToken);
      storage.set('auth', accessToken , remember);
    });
  };
  
export const logout = () => {
    return Promise.resolve().then(() => {
      removeAuthorizationHeader();
      storage.remove('auth');
    });
  };

export const relogin =()=>{
 const accessToken= storage.get('auth')
 setAuthorizationHeader(accessToken)
}