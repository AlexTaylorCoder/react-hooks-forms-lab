import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSearch, setSearch] = useState("")
  const [newItemInput, setnewItemInput] = useState(items)


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(returned) {

    setSearch(returned)
  }

  function handleAdd(returned) {

    setnewItemInput([...newItemInput,returned])
    console.log(newItemInput)

  }


  const itemsToDisplay =  newItemInput.filter(item=>item.name.slice(0,isSearch.length).toLowerCase().trim()===isSearch.toLowerCase().trim()).filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleAdd}/>
      <Filter search = {handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
