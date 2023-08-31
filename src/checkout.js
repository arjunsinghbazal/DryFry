import React from "react";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const prices = [120, 230, 330, 430, 540, 299, 199, 600, 499, 100, 444, 33, 222, 523, 287];
  const order = JSON.parse(localStorage.getItem("orders"));
  const data = JSON.parse(localStorage.getItem("data"));

  const matchedCategories = data.filter((category) => order.includes(category.idCategory));

  const totalPrice = matchedCategories.reduce((total, category) => {
    const price = prices[parseInt(category.idCategory) - 1];
    return total + price;
  }, 0);
  const navigate=useNavigate();
  const handlePayNow = () => {
    localStorage.removeItem("orders");
    setTimeout(() => {
      navigate("/thank");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 1000);
  };

  const handleCancelOrder = () => {
    localStorage.removeItem("orders")
    navigate("/")
  };

  return (
    <div className="checkout-container">
      {totalPrice > 0 ? (
        <>
          <h2>Checkout</h2>
          <div className="checkout-items">
            {matchedCategories.map((category) => {
              const price = prices[parseInt(category.idCategory) - 1];
              return (
                <div key={category.idCategory} className="checkout-item">
                  <p className="category-name">{category.strCategory}</p>
                  <p className="category-price">{price} INR</p>
                </div>
              );
            })}
          </div>
          <div className="total-price">
            <p>Total: {totalPrice} INR</p>
          </div>
          <div className="checkout-buttons">
            <button className="pay-now-button" onClick={handlePayNow}>Pay Now</button>
            <button className="cancel-order-button" onClick={handleCancelOrder}>Cancel Order</button>
          </div>
        </>
      ) : (
        <h1 className="red">Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Checkout;

