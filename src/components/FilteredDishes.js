import { useContext, useState, useEffect } from "react";
import Pagination from "./Pagination";
import CardDish from "./CardDish";
import { AllMenuContext } from "./AllMenuContext";

const FilteredDishes = (props) => {
  let [menuCategory, setMenuCategory] = useState([]);
  let [singleDish, setSingleDish] = useState([]);
  let allMenus = useContext(AllMenuContext);
  let [filteredDishes, setFilteredDishes] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);

  let indexOfLastDish = currentPage * itemsPerPage;
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;

  let showTheseDishesNow = filteredDishes.slice(
    indexOfFirstDish,
    indexOfLastDish
  );

  //Get all the categoreis
  async function getAllTheCategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setMenuCategory(categoryData.categories);
  }

  //Get only single dish
  async function getOnlyOneDish() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL);
    let singleDishData = await response.json();
    setSingleDish(singleDishData.meals);
  }

  useEffect(() => {
    getAllTheCategories();
    getOnlyOneDish();
  }, []);

 
  //Lets show only single dishes
  let maxItem = 8;
  let singleDishItems = singleDish.map((item, index) => {
    if (index < maxItem) {
      return (
        <li>
          <img src={item.strMealThumb} className="br-10" alt="items" />
          <h5>{item.strMeal}</h5>
        </li>
      );
    }
  });

  //Show Dishes on click
  let showFilteredDishesHandler = (category) => {
    setSingleDish([]);
    setActiveDish(category);
    let filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItem) => {
        return <CardDish menuItem={menuItem} />;
      });
    setFilteredDishes(filteredDishesAre);
  };

  let allCatagories = menuCategory.map((item) => {
    return (
      <li className={item.strCategory === activeDish ? "active" : ""}>
        <h4
          onClick={() => {
            showFilteredDishesHandler(item.strCategory);
          }}
        >
          {item.strCategory}
        </h4>
      </li>
    );
  });

  return (
    <div className="filtered-dishes">
      <div className="container">
        <div className="text-center">
          <h2>Choose your dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptatibus voluptas nam, dolore voluptates laborum earum repellat
            quae sint recusandae.
          </p>
        </div>
        <div className="filtered-dishes">
          <ul>{allCatagories}</ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {singleDishItems}
            {singleDishItems !== 0 || filteredDishes.length !== 0 ? (
              showTheseDishesNow
            ) : (
              <div className="alert">
                <h3 className="loader">{`Sorry, ${activeDish} Dish is not Available`}</h3>
                <h4>Please choose another Menu</h4>
              </div>
            )}
          </ul>
        </div>
        <Pagination
          filteredDishes={filteredDishes}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default FilteredDishes;
