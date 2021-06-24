import React from 'react';

export const FilteringCategories = ({
  restaurantsOn,
  openButtonHandler,
  closedButtonHandler,
  pickupButtonHandler,
  deliveryButtonHandler,
}) => {
  return (
    <div class="categories">
      <div>
        <button
          class="open"
          onClick={openButtonHandler}
          style={
            restaurantsOn === 'restaurantsopen'
              ? {
                  backgroundColor: 'rgb(140, 191, 217, 0.7)',
                  color: 'orangered',
                }
              : null
          }
        >
          {' '}
          Open{' '}
        </button>
      </div>
      {'  '}
      <div>
        <button
          class="closed"
          onClick={closedButtonHandler}
          style={
            restaurantsOn === 'restaurantsclosed'
              ? {
                  backgroundColor: 'rgb(140, 191, 217, 0.7)',
                  color: 'orangered',
                }
              : null
          }
        >
          {' '}
          Closed{' '}
        </button>
      </div>
      {'  '}
      <div>
        <button
          class="pick-up"
          onClick={pickupButtonHandler}
          style={
            restaurantsOn === 'restaurantspickup'
              ? {
                  backgroundColor: 'rgb(140, 191, 217, 0.7)',
                  color: 'orangered',
                }
              : null
          }
        >
          {' '}
          Pick-up{' '}
        </button>
      </div>
      {'  '}
      <div>
        <button
          class="delivery"
          onClick={deliveryButtonHandler}
          style={
            restaurantsOn === 'restaurantsdelivery'
              ? {
                  backgroundColor: 'rgb(140, 191, 217, 0.7)',
                  color: 'orangered',
                }
              : null
          }
        >
          {' '}
          Delivery{' '}
        </button>
      </div>
    </div>
  );
};
