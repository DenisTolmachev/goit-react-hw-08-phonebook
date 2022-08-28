import { Button } from 'components/common/Button.styled';
import defaultAvatar from 'img/defaultAvatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'store/auth/authSelectors';
import { logoutUser } from 'store/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <div>
      <img src={defaultAvatar} alt="avatar" />
      <span>Welcome, {userName}</span>
      <Button type="button" onClick={() => dispatch(logoutUser())}>
        LogOut
      </Button>
    </div>
  );
};
