let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe() {
  function RateARecipe(props) {
    function GiveRating(props) {
    return props.rating > 0 && props.rating < 6 ? <h3>{stars[props.rating - 1]}</h3> : null;
  }
  return (
    <>
      <GiveRating rating={props.rating}/>
    </>
  );
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
rating >=1 && rating <=5 ? GiveRating(props) : null;