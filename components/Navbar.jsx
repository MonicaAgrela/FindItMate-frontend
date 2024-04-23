import { Link } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../context/auth.context";
//import { useState } from "react";

function Navbar() {
  //const [click, setClick] = useState(false);

  //const handleClick = () => setClick(!click);

  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);
  return (
    <nav>
      {isLoggedIn && (
        <>
          {user.name}
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/items">
            <button>Items</button>
          </Link>

          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/how-it-works">
            <button>How it works</button>
          </Link>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
