import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navContent">
          <img
            src="https://bing.com/th/id/BCO.fc0e3daa-ff9b-471c-a246-2e46dafa3a38.png"
            alt="logo"
            className="Logo"
          />
          <div className="navItems">
            <Link to={"/"}>
              <p className="navbtn ">Home</p>
            </Link>
            <Link to={"/Recipies"}>
              <p className="navbtn">Recipies</p>
            </Link>
            <Link to={"/About"}>
              <p className="navbtn ">About</p>
            </Link>
            <Link to={"/Contact"}>
              <p className="navbtn ">Contact_Us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
