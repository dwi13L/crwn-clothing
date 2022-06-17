import React from "react";
import "./CategoryItem.scss";

export default function CategoryItem({ title, imageUrl }) {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ background: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Buy now</p>
      </div>
    </div>
  );
}
