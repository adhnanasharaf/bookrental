import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../redux/ads/adsSlice";

const Categories = () => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleCategories = (category) => {
    setCategory(category);

    if (!category) {
      return;
    }

    dispatch(filterByCategory(category));
  };

  return (
    <ul className="categories_navlinks">
      <li className="navlink" onClick={() => handleCategories("Romance")}>
        Romance
      </li>
      <li className="navlink" onClick={() => handleCategories("Action")}>
        Action
      </li>
      <li className="navlink" onClick={() => handleCategories("Adventure")}>
        Adventure
      </li>
      <li className="navlink" onClick={() => handleCategories("Fantasy")}>
        Fantasy
      </li>
      <li className="navlink" onClick={() => handleCategories("Sci-Fi")}>
        Sci-Fi
      </li>
      <li className="navlink" onClick={() => handleCategories("Drama")}>
        Drama
      </li>
      <li className="navlink" onClick={() => handleCategories("Childrens")}>
        Childrens
      </li>
      <li className="navlink" onClick={() => handleCategories("Comics")}>
        Comics
      </li>
      <li className="navlink" onClick={() => handleCategories("Manga")}>
        Manga
      </li>
    </ul>
  );
};

export default Categories;
