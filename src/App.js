import React from 'react';
import styled from "styled-components";
import Filters from './Components/Filters';
import Products from './Components/Products';
import ShoppingCart from './Components/ShoppingCart';

const DivApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default class App extends React.Component {

  state = {
    filter:
      {
      valorMin: '',
      valorMax: '',
      nome: 'bbbbbbbbbbb',
    },

    inputValorMin: '',
    inputValorMax: '',
    inputNome: 'aaaaaaa',
  }

  render() {
    return (
      <DivApp>
        <Filters filtroState={this.state}/>
        <Products filtroState={this.state}/>
        <ShoppingCart filtroState={this.state}/>
      </DivApp>
    );
  }
}
