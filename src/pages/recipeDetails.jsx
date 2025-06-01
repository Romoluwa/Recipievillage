import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./recipeDetails.module.css";
import Navbar from "../components/navbar";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipie, setRecipie] = useState([]);
  const getRecipie = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log(response);
      setRecipie(response.data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipie();
  }, [id]);
  return (
    <div className={styles.recipeDetailsContainer}>
      <Navbar />
      <div className={styles.container}>
        <p className={styles.header}>{recipie.strMeal}</p>
        <img src={recipie.strMealThumb} className={styles.image} />
        <div className={styles.ingredientCard}>
          <p className={styles.header}>Ingredients</p>
          <div className={styles.i1}>
            <p>{recipie.strIngredient1}</p>
            <p>{recipie.strMeasure1}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient2}</p>
            <p>{recipie.strMeasure2}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient3}</p>
            <p>{recipie.strMeasure3}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient4}</p>
            <p>{recipie.strMeasure4}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient5}</p>
            <p>{recipie.strMeasure5}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient6}</p>
            <p>{recipie.strMeasure6}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient7}</p>
            <p>{recipie.strMeasure7}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient8}</p>
            <p>{recipie.strMeasure8}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient9}</p>
            <p>{recipie.strMeasure9}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient10}</p>
            <p>{recipie.strMeasure10}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient11}</p>
            <p>{recipie.strMeasure11}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient12}</p>
            <p>{recipie.strMeasure12}</p>
          </div>
          <div className={styles.i1}>
            <p>{recipie.strIngredient13}</p>
            <p>{recipie.strMeasure13}</p>
          </div>
        </div>
        <div className={styles.instructionCard}>
          <p className={styles.header}>Instructions</p>
          <p className={styles.content}>{recipie.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}
