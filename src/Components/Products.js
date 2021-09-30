import React from 'react';
import styled from "styled-components";
import ProductCard from './ProductCard';
import Sort from './Sort'


const DivProductArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 60vw;
`;

const DivProductCart = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 92vh;
    width: 60vw;
`;

const DivProductFilter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
`;

const DivProductFilterOptions = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4vh;
`;


export default class Products extends React.Component {
  render() {

    const produtos = this.props.produtos;

    return (
      <DivProductArea>
        <DivProductFilter>
            <p>Quantidade de produtos: 6</p>
            <form>
                <DivProductFilterOptions>
                      <Sort/>
                </DivProductFilterOptions>
            </form>
        </DivProductFilter>
        <DivProductCart>
            <ProductCard produtos={produtos} filtroState={this.props.filtroState} />
        </DivProductCart>
      </DivProductArea>
    );
  }
}