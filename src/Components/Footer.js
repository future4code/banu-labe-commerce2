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
/* font-size: 5em; */
`;

const Logo = styled.h1`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 5em;
`;

const Imagem = styled.img`
max-width: 4vw;
`;

export default class Rodape extends React.Component {
    render() {
        return (
            <Footer>
                <div>
                    <Logo> LabGeek </Logo>
                </div>
                <div>
                    <div>
                        <p> Formas de pagamento </p>
                    </div>
                    <div>
                        <Imagem src={Mastercard} />
                        <Imagem src={Visa} />
                        <Imagem src={Picpay} />
                        <Imagem src={Pix} />
                        <Imagem src={Ame} />
                    </div>
                </div>
            </Footer>
        );
    }
}