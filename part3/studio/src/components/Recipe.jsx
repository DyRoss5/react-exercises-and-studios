import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.marthastewart.com/856421/coconut-layer-cake";
   let authorPhoto = "https://www.marthastewart.com/thmb/WJ7eJizDmIzkAfiryYv7GzUWkaw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/martha-stewart-fried-chicken-180-d111035_vert-173e3c60cce241afb72c89611640faef.jpg"
   let authorName = "Martha Stewart";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["flour", "eggs", "vanilla", "milk", "coconut"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Coconut Layer Cake</h1>
            <p>This showstopping dessert has six layers, a coconut cream filling, and plenty of billowy seven-minute frosting.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.marthastewart.com/thmb/lF4GjcRggwDpQAItdtcfYTAG4XE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cakes_00126_vert-55b9b36bc12d485385cf76179a8f2c53.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
