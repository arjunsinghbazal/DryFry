import React from "react";

const Cart = ({ data }) => {
  const prices=[120,230,330,430,540,299,199,600,499,100,444,33,222,523,287];
  return (
    <section className="FoodCardContainer">
      <div className="FoodCards">
        {data.map((value) => (
          value.idCategory !== "1" && (
            <div key={value.idCategory} className="FoodCard">
              <img className="foodImage" src={value.strCategoryThumb} alt="404" />
              <div className="food_info">
                <h3>{value.strCategory}</h3>
                <p>{value.strCategoryDescription}</p>
                <button className="btn">Price {prices[value.idCategory]} INR</button>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Cart;
