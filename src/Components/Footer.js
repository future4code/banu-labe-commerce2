import React from 'react';
import styled from 'styled-components';
import Ame from './image/ame.png';
import Mastercard from './image/mastercard.png';
import Picpay from './image/picpay.png';
import Pix from './image/pix.png';
import Visa from './image/visa.png'

const Footer = styled.div`
margin-top: 10vh;
height: 25vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: gray;
color: #fff;

@media (max-width: 767px){
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
`;

const Logo = styled.h1`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 5em;

@media (max-width: 767px){
    font-size: 3em;
    /* background-color: yellow; */
  }
`;

const Imagem = styled.img`
max-width: 4vw;

@media (max-width: 767px){
    /* display: none; */
    /* background-color: yellow; */
  }
`;

const FormPagamento = styled.div`

@media (max-width: 767px){
    font-size: larger;
  }
`;

const Detalhes = styled.div`
@media (max-width: 767px){
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    display: none;
    background-color: yellow;
  }
`;

export default class Rodape extends React.Component {
    render() {
        return (
            <Footer>
                <Logo>
                    <p> LabGeek </p>
                </Logo>
                <Detalhes>
                    <FormPagamento>
                        <p> Formas de pagamento </p>
                    </FormPagamento>
                    <div>
                        <Imagem src={Mastercard} />
                        <Imagem src={Visa} />
                        <Imagem src={Picpay} />
                        <Imagem src={Pix} />
                        <Imagem src={Ame} />
                    </div>
                </Detalhes>
            </Footer>
        );
    }
}