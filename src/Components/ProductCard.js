import React from 'react';
import styled from "styled-components";
import produto from "./image/celular.jpg"

const ShoppingCartDiv = styled.div`
    display: grid;
    width: 100%;
    height: 92vh;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: calc(92vh / 2) calc(92vh / 2);
    justify-items: stretch;
    row-gap: 5px;
    column-gap: 5px;
`;


const ShoppingCartItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid black;
    padding: 5px;
`;

const ItemImage = styled.img`
    height: 55%;
    width: auto;
`;


export default class ProductCard extends React.Component {
  render() {
    return (
      <ShoppingCartDiv>
        <ShoppingCartItem>
            <ItemImage src={produto} />
            <p>Celular Samsumg</p>
            <p>R$ 1.000,00</p>
            <button>Adicionar ao carrinho</button>
        </ShoppingCartItem>
        <ShoppingCartItem>
            <ItemImage src={produto} />
            <p>Celular Samsumg</p>
            <p>R$ 1.000,00</p>
            <button>Adicionar ao carrinho</button>
        </ShoppingCartItem>
        <ShoppingCartItem>
            <ItemImage src={produto} />
            <p>Celular Samsumg</p>
            <p>R$ 1.000,00</p>
            <button>Adicionar ao carrinho</button>
        </ShoppingCartItem>
        <ShoppingCartItem>
            <ItemImage src={produto} />
            <p>Celular Samsumg</p>
            <p>R$ 1.000,00</p>
            <button>Adicionar ao carrinho</button>
        </ShoppingCartItem>
        <ShoppingCartItem>
            <ItemImage src={produto} />
            <p>Celular Samsumg</p>
            <p>R$ 1.000,00</p>
            <button>Adicionar ao carrinho</button>
        </ShoppingCartItem>
      </ShoppingCartDiv>
    );
  }
}