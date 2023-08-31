import React, { useEffect, useState } from "react";

const Cart = ({ data, error }) => {
  const prices = [120, 230, 330, 430, 540, 299, 199, 600, 499, 100, 444, 33, 222, 523, 287];
const [Data,setData]=useState([]);

  const setOrder = (index) => {
    setData((prevData) => [...prevData, index]); 
  };


useEffect(()=>{
  localStorage.setItem("orders", JSON.stringify(Data));
},[Data])
  return (
    <section className="FoodCardContainer">
      <div className="FoodCards">
        {data.length > 0 ? (
          data.map((value) => (
            value.idCategory !== "1" && (
              <div key={value.idCategory} className="FoodCard">
                <img className="foodImage" src={value.strCategoryThumb} alt="404" />
                <div className="food_info">
                  <h3>{value.strCategory}</h3>
                  <p>{value.strCategoryDescription}</p>

                 <div> <button className="btn">Price {prices[value.idCategory]} INR</button>
                  <button className="btn" onClick={()=>setOrder(value.idCategory)}>Order</button></div>

                  <button className="btn">Price {prices[value.idCategory]} INR</button>

                </div>
              </div>
            )
          ))
        ) : (
          error ? <div>{error}</div> : <div>NO ITEM FOUND</div>
        )}
      </div>
    </section>
  );
};

export default Cart;

