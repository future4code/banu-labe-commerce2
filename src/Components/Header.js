import React from 'react';
import styled from 'styled-components';
import carrinho from './image/cart.jpg';

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 13vh;
background-color: #00acb7;
padding-right: 50px;

@media (max-width: 767px){
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 100vw;
}
`;

const Logo = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 3.5em;
    color: #fff;

    @media (max-width: 767px){
    font-size: 2em;
}
`;

const Menu = styled.ul`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1.7em;
font-weight: bold;
color: #FFF;
width: 50vw;
list-style: none;
display: flex;
flex-direction: row;
justify-content: space-between;

@media (max-width: 767px){
    display: none;
}
`;

const Categorias = styled.button`
border: none;
background-color: #00acb7;
color: #fff;
font-size: 1em;
height: 13vh;

:hover {
    background-color: orange;
}
`;

const Carrinho = styled.img`
max-width: 3.5vw;
cursor: pointer;

@media (max-width: 767px){
    display: flex;
    flex-direction: column;
    max-width: 8vw;
    margin-right: -50px
}
`

export default class Cabecalho extends React.Component {
    render() {
        return (
            <Header>
                <Logo> LabGeek </Logo>
                <Menu>
                    <Categorias> Camisetas </Categorias>
                    <Categorias> Canecas </Categorias>
                    <Categorias> Presentes </Categorias>
                    <Categorias> Decoração </Categorias>
                </Menu>
                <Carrinho src={carrinho} onClick={this.props.changeCartScreen} />
            </Header>
        );
    }
}