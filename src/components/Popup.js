import { useContext } from "react";
import { AllMenuContext } from "./AllMenuContext";

const Popup = (props) => {

const allMenus = useContext(AllMenuContext)

  let dishDetails = allMenus.filter((menuItem) => {
      return menuItem.strMeal === props.currentDish;
    })
    .map((item) => {
      return (
        <div className="popup-content-data">
          <div className="popup-header">
            <img src={item.strMealThumb} alt="Meals" />
            <h5 className="popup-header-category">{item.strCategory}</h5>
          </div>
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>

          <ul className="dish-ingredients flex">
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
          </ul>
          <button onClick={()=>{props.addToCartHandler(item.strMealThumb, item.strMeal)}}>Order Now</button>
        <h1 className="popup-close" onClick={props.closePopup}>
          X
        </h1>
        </div>
      );
    });

  return (
    <div className="popup">
      <div className="popup-content">
        {dishDetails}     
      </div>
    </div>
  );
};

export default Popup;
