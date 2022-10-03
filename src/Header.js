import { NavLink } from 'react-router-dom';
import './Header.css';
import Chatroom from './Chatroom';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';


function Header() {

  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    await setUser(null);
  };

  return (
    <>
      <div className="header">
        <NavLink to="/chatroom" component={Chatroom}>
          <h2>React chat</h2>
        </NavLink>
        <div>
          <h2>Welcome, {user.email}!</h2>
        </div>
        {user && (
          <NavLink to="/auth">
            <button onClick={handleLogout}>Logout</button>
          </NavLink>
        )}
      </div>
    </>
  );
}

// export default Header;