import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
export default function Recipies() {
  return (
    <div className="recipiePage">
      <Navbar />
      <div className="recipeContainer">
        <input type="text" className="searchInput" />
        {/* your remaining component should fall here */}
      </div>
    </div>
  );
}
