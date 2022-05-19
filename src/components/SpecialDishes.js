import { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import AddToCart from "./AddToCart";

import { AllMenuContext } from "./AllMenuContext";

const SpecialDishes = (props) => {
  let [showPopup, setShowPopup] = useState(false);
  let [currentDish, setCurrentDish] = useState("");
  let [addToCartItem, setAddToCartItem] = useState([])

  const allMenus = useContext(AllMenuContext)
  
//Lets show the Popup 
  const showPopupHandler = (dishName) => {
    setShowPopup(true);
    setCurrentDish(dishName);
  };
  
//Lets close the Popup
  const closePopup = () => {
    setShowPopup(false);
  };

//Add to cart handler
  function addToCartHandler(addToCartImg, addToCartTitle) {
    setAddToCartItem([
      ...addToCartItem,
      {
        "img": addToCartImg,
        "title": addToCartTitle
      }
    ])
  }

  let maxSpecialDishes = 8;

  let specialMenus = allMenus.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return (
        <CardDish menuItem={menuItem} showPopupHandler={showPopupHandler} />
      );
    }
  });

  return (
    <section className="special-dishes">
      {showPopup && (
        <Popup
          closePopup={closePopup}
          currentDish={currentDish} 
          addToCartHandler={addToCartHandler}
        />
      )}

      <div className="container">

        <AddToCart addToCartItem={addToCartItem}/>
        

        
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            consequuntur placeat fuga, corrupti adipisci impedit ducimus beatae,
            necessitatibus autem, at earum dolorum dolores est accusantium.
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;
