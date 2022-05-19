
const CardDish = (props) => {

  
  return (
    <li>
      <a href="javaScript:;" onClick={()=>props.showPopupHandler(props.menuItem.strMeal)}>
        <img
          src={props.menuItem.strMealThumb}
          alt="Meal Pic"
          className="br-10"
        />
        <h5>{props.menuItem.strMeal}</h5>
      </a>
    </li>
  );
};

export default CardDish;
