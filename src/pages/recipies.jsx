import { Link, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./recipies.module.css";

export default function Recipies() {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(response.data.categories);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="recipiePage">
      <Navbar />
      <div className="recipeContainer">
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search for a recipie!"
        />
        <p className={styles.title}>Recipie Categories</p>
        <div className={styles.container}>
          {categories.map((category) => (
            <Link
              key={category.idCategory}
              to={`/Recipie/${category.strCategory}`}
              className={styles.card}
            >
              <img src={category.strCategoryThumb} className={styles.image} />
              <p className={styles.cardTitle}>{category.strCategory}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
