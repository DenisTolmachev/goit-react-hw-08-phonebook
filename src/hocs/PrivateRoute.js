import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLLoggedIn } from 'store/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLLoggedIn);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
