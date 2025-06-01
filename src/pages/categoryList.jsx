import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styles from "./categoryList.module.css";
import Navbar from "../components/navbar";
export default function CategoryList() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const getMeals = async () => {
    try {
      const response =
        await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}
  `);
      setMeals(response.data.meals);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const searchMeals = async (searchTerm) => {
    try {
      const response =
        await axios.get(`https://https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}
  `);
      if (response.data.meals == "no data found") {
        alert("no data found");
        setMeals([]);
      } else {
        setMeals(response.data.meals);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div className="clPage">
      <Navbar />
      <div className="recipeContainer">
        <input
          onChange={(e) => {
            if (e.target.value == "") {
              getMeals();
            } else {
              searchMeals(e.target.value);
            }
          }}
          type="text"
          className={styles.searchInput}
          placeholder="Search for a recipie!"
        />
        {/* your remaining component should fall here */}
        <p className={styles.header}>Recipes for {category}</p>
        <div className={styles.container}>
          {meals.map((category) => (
            <Link
              key={category.idMeal}
              to={`/Recipie/meal/${category.idMeal}`}
              className={styles.card}
            >
              <img src={category.strMealThumb} className={styles.image} />
              <p className={styles.cardTitle}>{category.strMeal}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
