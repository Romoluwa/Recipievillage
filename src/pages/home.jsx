import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="landingPage">
        <p className="Header">Welcome to Foodies Corner!</p>
        <p>
          where you get the best recepies,straight from the heart of the
          kitchen.
        </p>
        <Link to={"/Recipies"}>
          <button className="btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
