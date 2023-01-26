import React from "react";
import styled from "styled-components";

const List = styled.ol`
    width: 80%;
    justify-content: center;
    margin-left: 2em;
    margin-top: 4em;
    padding: 4em;
    border: solid grey;
`

const ShoppingBasket = ({basket}) => {
    let getShoppingList;
    if(basket.length === 0) {
        getShoppingList = <p>Your basket is empty</p>
    } else {
        getShoppingList = basket.map((product, index) => {
            return <li key={index}> {product.name}</li>
        })
    }

    return (
        <div>
            <List>
            {getShoppingList}
            </List>
        </div>
    );
}
export default ShoppingBasket;
