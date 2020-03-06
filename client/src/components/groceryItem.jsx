import React from 'react';

const GroceryItem = props => {

    return (
        <div>
            <p>{props.groceryItem.name} {props.groceryItem.quantity}</p>
        </div>
    );
};

export default GroceryItem;