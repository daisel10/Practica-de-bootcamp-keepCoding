import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../redux/selectores';

export const RequireAuth = ({ children }:{children:JSX.Element}) => {
    const isLogged = useSelector(getIsLogged);
  
    const location = useLocation();
    if (!isLogged) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
  };
  
  export default RequireAuth;
  