const AddToCart = ({ addToCartItem }) => {
    
    let addToCartResults = addToCartItem.map(item => {
        return (
            <div>
                <img src={item.img} alt="food item" />
                <h6>{item.title}</h6>
            </div>
        )
    })

    return (
        <div className="add-to-cart-wrapper">
            <div className="add-to-cart-item">
                <h6 className="text-center">Basket</h6>
                {addToCartResults}
            </div>
        </div>
  )
};

export default AddToCart;
