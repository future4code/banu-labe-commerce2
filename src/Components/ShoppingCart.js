import React from 'react';
import styled from "styled-components";
import ShoppingCartItem from './ShoppingCartItem';

const DivCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 20vw;
    border: 1px solid black;
`;

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <DivCart>
        <p>Carrinho</p>
        <div>
            <ShoppingCartItem />
        </div>
        <p>Total: R$ 1.000,00</p>
      </DivCart>
    );
  }
}