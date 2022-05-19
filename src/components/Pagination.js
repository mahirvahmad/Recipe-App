const Pagination = (props) => {
  let numberOfPages = [];
  for (let i = 1; i <= Math.ceil(props.filteredDishes.length/props.itemsPerPage); i++) {
    numberOfPages.push(i);
    }
    
    const showNextDishesHandler = (event) => {
        let currentPage = event.target.id
        props.setCurrentPage(currentPage)
    }
  
    let pages = numberOfPages.map((pageNumber) => {
        return <li id={pageNumber} onClick={showNextDishesHandler}>{pageNumber}</li>
    })
    
    
  return (
    <section>
      <ul className="pagination">
        {pages}
      </ul>
    </section>
  );
};

export default Pagination;
