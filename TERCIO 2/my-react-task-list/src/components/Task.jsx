import { useState } from "react";

export const Task = (props) => {

    const {name, isCompleted, onDelete, taskChecked} = props;

    const [isChecked, setIsChecked] = useState(isCompleted)

    const handleDeleteItem = () => {
        onDelete(name)
    }

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
        isTaskChecked(isChecked,name);
      }

    return (
        <li>
        <article>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
        <label htmlFor="myCheckbox" style={{textDecoration: isChecked ? "line-through" : ''}}> {name} </label>
          <button onClick={handleDeleteItem}>Delete</button>
        </article>
      </li>
    )

}