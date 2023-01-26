import React from "react";
import styled from "styled-components";

const Header = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-left: 1em;
    padding: 1em;
    height:2em;
    width: 87%;
    background-color: #12554A;
    color: white;
`
const ListContainer = styled.ol`
    list-style: none;
`
const ShoppingList = styled.li`
    list-style: none;
`
const ListedProducts = styled.p`
    width: 89%;
    margin-left: 2em;
    padding: 1em;
    justify-content: space-between;
    background-color: #A1D3C1;
`

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    &:hover {
    background-color: #5CAB9B;
    }
`

const Products = ({ products, handleClick}) => {
    const ProductList = products.map((product, index) => {
        return (
            <ListContainer>
                <ShoppingList key={index}>
                    Name: {product.name}, Weight: {product.weight}, Price {product.price},
                    Description: {product.description}
                    <Button onClick={() => handleClick(product)}>
                        Add to basket
                    </Button>
                </ShoppingList>
            </ListContainer>
        );
    })

    return (
        <div>
            <Header>Tasty Things</Header>
            <ListedProducts>
                {ProductList}
            </ListedProducts>
        </div>
    );
};

export default Products;