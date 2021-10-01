import React from 'react';
import styled from "styled-components";
import ProductCard from './ProductCard';
import Sort from './Sort'


const DivProductArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 72vw;
    margin-top: 5vh;

    @media (max-width: 767px){
      margin: 10vw 0;
    /* background-color: yellow; */
}
`;

const DivProductCart = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 92vh;
    width: 60vw;
   
  @media (max-width: 767px){
    width: auto;
    /* background-color: yellow; */
  }
`;

const DivProductFilter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;

    @media (max-width: 767px){
      display: flex;
      justify-content: center;
    /* background-color: yellow; */
  }
`;

const DivProductFilterOptions = styled.label`
    width: 30vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4vh;
    
    @media (max-width: 767px){
    /* background-color: yellow; */
  }
`;

const QntProdutos = styled.p`
 @media (max-width: 767px){
   display: none;
    /* background-color: yellow; */
  }
`;


export default class Products extends React.Component {
  render() {

    const produtos = this.props.produtos;

    return (
      <DivProductArea>
        <DivProductFilter>
          <QntProdutos>Quantidade de produtos: 6</QntProdutos>
          <form>
            <DivProductFilterOptions>
              <Sort />
            </DivProductFilterOptions>
          </form>
        </DivProductFilter>
        <DivProductCart>
          <ProductCard produtos={produtos} filtroState={this.props.filtroState} 
          addToCart={this.props.addToCart} />
        </DivProductCart>
      </DivProductArea>
    );
  }
}