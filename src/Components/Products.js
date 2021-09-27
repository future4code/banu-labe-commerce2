import React from 'react';
import styled from "styled-components";
import ProductCard from './ProductCard';

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

    const produtos = [
      {
        id: Date.now(),
        name: "Celular Iphone 12",
        value: 13000.0,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
      },

      {
        id: Date.now(),
        name: "Celular Samsung Galaxy A32",
        value: 9000.0,
        imageUrl: "https://a-static.mlcdn.com.br/618x463/celular-samsung-galaxy-a32-128gb-octa-core-camera-quadrupla/gazinshop/9824/b87e1377a3d304ef717671fde7638147.jpg"
      },

      {
        id: Date.now(),
        name: "Imac 27 polegadas",
        value: 5000.0,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-og-202008?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1594849639000"
      },

      {
        id: Date.now(),
        name: "Celular Iphone 12",
        value: 13000.0,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
      },

      {
        id: Date.now(),
        name: "Celular Iphone 12",
        value: 13000.0,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
      },
    ];


    return (
      <DivProductArea>
        <DivProductFilter>
            <p>Quantidade de produtos: 6</p>
            <form>
                <DivProductFilterOptions>
                        <p>Ordenação:</p>
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                </DivProductFilterOptions>
            </form>
        </DivProductFilter>
        <DivProductCart>
            <ProductCard produtos={produtos}/>
        </DivProductCart>
      </DivProductArea>
    );
  }
}