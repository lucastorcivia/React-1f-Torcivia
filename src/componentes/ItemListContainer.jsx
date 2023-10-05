import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h2 className="display-4">{greeting}</h2>
      </div>
    </div>
  );
}

export default ItemListContainer;
