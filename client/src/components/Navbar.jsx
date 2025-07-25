// client/src/components/Navbar.jsx

import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import "../styles/variables.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/state";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src="/assets/logo.png" alt="House Hunt Logo" />
      </Link>

      {/* Search bar */}
      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton disabled={search === ""}>
          <Search
            sx={{ color: "#FF385C" }}
            onClick={() => {
              navigate(`/properties/search/${search}`);
            }}
          />
        </IconButton>
      </div>

      {/* Right side (Host + User menu) */}
      <div className="navbar_right">
        <a href={user ? "/create-listing" : "/login"} className="host">
          Become A Host
        </a>

        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: "#555" }} />
          {!user ? (
            <Person sx={{ color: "#555" }} />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace("public", "")}`}
              alt="profile"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </button>

        {/* Dropdown */}
        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link to={`/${user._id}/trips`}>Trip List</Link>
            <Link to={`/${user._id}/wishList`}>Wish List</Link>
            <Link to={`/${user._id}/properties`}>Property List</Link>
            <Link to={`/${user._id}/reservations`}>Reservation List</Link>
            <Link to="/create-listing">Become A Host</Link>
            <Link
              to="/login"
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
