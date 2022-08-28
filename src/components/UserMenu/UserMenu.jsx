import { UserButton } from 'components/common/Button.styled';
import defaultAvatar from 'img/defaultAvatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'store/auth/authSelectors';
import { logoutUser } from 'store/auth/authOperations';
import { UserMenuStyled, UserMenuText, UserAvatar } from './UserMenu.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <UserMenuStyled>
      <UserAvatar src={defaultAvatar} alt="avatar" />
      <UserMenuText>Welcome, {userName}</UserMenuText>
      <UserButton type="button" onClick={() => dispatch(logoutUser())}>
        LogOut
      </UserButton>
    </UserMenuStyled>
  );
};
