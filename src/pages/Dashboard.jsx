import React from "react";
import { getUserStorage } from "../utils/localStorageData";
import DashboardMainWrapper from "../wrappers/DashboardMain";
import mealList from "../utils/mealList";

const Dashboard = () => {
  const loggedUser = getUserStorage();
  return (
    <DashboardMainWrapper>
      <div className="dashboard-title">
        <h3>Good day, {loggedUser?.name}!</h3>
        <p>What delicious meal are you craving for today?</p>
      </div>
      <div className="menu-section">
        <div className="menu">
          {mealList.map((meal) => {
            const { id, title, image, mealInfo, price } = meal;
            return (
              <article className="menu-info" key={id}>
                <div className="meal-container">
                  <img src={image} alt="" className="meal-image" />
                </div>
                <h3 className="title">{title}</h3>
                <p className="info">{mealInfo}</p>
                <div className="price-info">
                  <p className="price">N {price}</p>
                  <button className="cart-btn">Add to cart</button>
                </div>
              </article>
            );
          })}
          {/* <article className="menu-info">
            <div className="meal-container">
              <img src={pasta} alt="" className="meal-image" />
            </div>
            <h3 className="title">Stir Fry Pasta</h3>
            <p className="info">The in-house pasta and chicken by chef Moose</p>
            <div className="price-info">
              <p className="price">N 1,000.00</p>
              <button className="cart-btn">Add to cart</button>
            </div>
          </article> */}
        </div>
      </div>
    </DashboardMainWrapper>
  );
};

export default Dashboard;
