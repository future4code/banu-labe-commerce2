import React from 'react';
import styled from "styled-components";

const DivCartItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 15vw;
    /* border: 1px solid black; */
`;

export default class ShoppingCartItem extends React.Component {
  render() {
    return (
      <div>
            <DivCartItem>
                <p>2x - Celular</p>
                <button>Remover</button>
            </DivCartItem>
            <DivCartItem>
                <p>10x - Celular</p>
                <button>Remover</button>
            </DivCartItem>
      </div>
    );
  }
}