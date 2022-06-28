import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/user-slice';
import { useNavigate } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => !!state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
