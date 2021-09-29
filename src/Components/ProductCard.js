import React from 'react';
import styled from "styled-components";

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

    let FilterMin = this.props.produtos.filter((produto, index, valor) => {
      if (this.props.filtroState.valorMin < produto.value || this.props.filtroState.valorMin === '') {
        return true
      } else {
        return false
      }
    })

    let FilterMax = FilterMin.filter((produto, index, valor) => {
      if(this.props.filtroState.valorMax > produto.value || this.props.filtroState.valorMax === '') {
        return true
      } else {
        return false
      }
    })  

    let MapName = FilterMax.filter((produto) => {
      if (produto.name.includes(this.props.filtroState.nome)) {
        return true
      } else {
        return false
      }
    })

    let MapFilter = MapName.map((produto, index, valor) => {
      return (
        <ShoppingCartItem key={index}>
          <ItemImage src={produto.imageUrl} />
          <p>{produto.name}</p>
          <p>R$ {produto.value}</p>
          <button>Adicionar ao carrinho</button>
        </ShoppingCartItem>
      )
    })

    return (
      <ShoppingCartDiv>
        {MapFilter}
      </ShoppingCartDiv>
    );
  }
}