import React from 'react';
import GroceryItem from './groceryItem.jsx';

const GroceryList = props => {

    return (
        <div>
            {props.groceries.map(item => {
                return (
                    <GroceryItem key={item.id} groceryItem={item} />
                )
            })
            }
        </div>
    );
};

export default GroceryList;