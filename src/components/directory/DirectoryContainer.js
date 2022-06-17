import React from "react";
import "./DirectoryContainer.scss";
import CategoryItem from "../categoryItem/CategoryItem.js";

export default function DirectoryContainer({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} {...category} />;
      })}
    </div>
  );
}
