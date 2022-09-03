import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLLoggedIn } from 'store/auth/authSelectors';

export const PublicRoute = ({ children, restricted = false }) => { 
    const isLogged = useSelector(getIsLLoggedIn);
    const redirect = isLogged && restricted;
    
    return (
      redirect ? <Navigate to="/" /> : children
    );
  }; 