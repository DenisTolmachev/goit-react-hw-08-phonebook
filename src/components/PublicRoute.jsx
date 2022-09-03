import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLLoggedIn } from 'store/auth/authSelectors';

export const PublicRoute = ({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) => {
  const isLoggedIn = useSelector(getIsLLoggedIn);
  const redirect = isLoggedIn && restricted;

  return redirect ? <Navigate to={redirectTo} /> : Component;
};
