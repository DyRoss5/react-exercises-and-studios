import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label:"recipe", value:"recipe"}, {label:"desserts", value:"desserts"}, {label:"favorites", value:"favorites"}];
   const [boardName, setBoardName] = useState("no boards yet!");
   const handleChange = (event) => {
      boardName = setBoardName(event.target.value);
   }

   return (
      <>
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
         {boards.map(() => (<option value={value}>{label}</option>))}
      </select>
      <p>Saved to {boardName}!</p>
      </div>
      </>
   );
}
