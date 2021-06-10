import React from "react";
import "../App.css";

export const RestaurantsButton = ({restaurantsOn ,restaurantsButtonHandler}) => {

  return (
    <div>
      <button class="restaurantsbutton" onClick={restaurantsButtonHandler} 
      style={restaurantsOn? {backgroundColor:  'rgb(140, 191, 217, 0.7)'}: null}>
        <span> Restaurants In Berlin </span>
      </button>
      
    </div>
  );
};
