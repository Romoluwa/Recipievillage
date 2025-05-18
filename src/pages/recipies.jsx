import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
export default function Recipies() {
  return (
    <div className="recipiePage">
      <Navbar />

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for a recipie!"
          className="input"
        />
      </div>
    </div>
  );
}
