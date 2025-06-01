import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
export default function About() {
  return (
    <div className="div">
      <Navbar />
      <p className="text-4xl font-bold text-center text-gray-800 my-8">
        About Foodies Corner
      </p>
      <div className="text-justify m-8 flex flex-col gap-5">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to Foodies Corner- your culinary community, where every dish
          tells a story, and every recipe brings us closer together.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Foodies Corner, we are a passionate group of 13 dedicated food
          lovers, each bringing our unique flavor to the table. From seasoned
          chefs to home-cooking enthusiasts, our team is united by one simple
          mission: to inspire, share, and elevate the joy of cooking.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you're looking for a quick weeknight meal, a show-stopping
          dish for a special occasion, or the perfect recipe to share with loved
          ones, Foodies Corner is here to guide you every step of the way. With
          hundreds of carefully curated recipes, cooking tips, and culinary
          inspiration, we aim to create a place where food brings us all
          together.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We believe food is more than just fuel – it’s an experience, a memory,
          and a way to connect with others. At Foodies Corner, we strive to
          bring that experience to life with each recipe we share, and we’re
          proud to be part of your kitchen adventures.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for being a part of Foodies Corner. Here, we’re not just
          about cooking – we’re about creating moments, making memories, and
          celebrating the beauty of food, one recipe at a time.
        </p>
      </div>
    </div>
  );
}
