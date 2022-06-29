import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [inputState,inputSetState] = useState("")
  const [selectState,selectSetState] = useState("Produce")



  function buttonSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({id:uuid(), name:inputState,category:selectState});

  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input onChange={e=>inputSetState(e.target.value)}type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={e=>selectSetState(e.target.value)}name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onClick={buttonSubmit}type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
