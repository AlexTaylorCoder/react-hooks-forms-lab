import React, {useState} from "react";

function Filter({ onCategoryChange, search }) {

  //Get data from data.js
  function getInput(e) {
      search(e.target.value)

  }
  return (
    <div className="Filter">
      <input onChange = {getInput} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
