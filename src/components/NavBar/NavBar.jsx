import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/notes/new">Add a Note</Link>
      &nbsp; | &nbsp;
      <Link to="/">View all Notes</Link>
      &nbsp;&nbsp;
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}