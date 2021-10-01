import React from 'react';
import styled from "styled-components";

const DivFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */
    height: 100vh;
    width: 20vw;
   
    @media (max-width: 767px){
      display: flex;
      flex-direction: row;
      height: 20vw;
      justify-content: space-around;
      align-items: flex-start;
      margin-top: -10vh;
      padding-bottom: 10vh;
    /* background-color: yellow; */
  }
`;

const Filtro = styled.form`
  padding-top: 10vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media (max-width: 767px){
    display: flex;
    justify-content: space-around;
    /* background-color: yellow; */
  }
`;

const P = styled.p`
  font-weight: 300;
  margin-bottom: 8px;
  @media (max-width: 767px){
    margin: 10px 0;
    text-align: center;
    /* background-color: yellow; */
  }
`;

const Input = styled.input`
border: 1px solid gray;
max-width: 10vw;

@media (max-width: 767px){
    margin: 0 10px;
    text-align: center;
    /* background-color: yellow; */
  }
`;

const TituloFiltro = styled.h3`
@media (max-width: 767px){
   display: none;
  }

`;


export default class Filters extends React.Component {

  render() {
    return (
      <DivFilter>
        <Filtro>
            <TituloFiltro>Filtros:</TituloFiltro>
                <label>
                    <P>Valor mínimo</P>
                    <Input type={"number"} onChange={this.props.onChangeValorMin} 
                    value={this.props.filtroState.valorMin} />
                </label>
                <label>
                    <P>Valor máximo</P>
                    <Input type={"number"} onChange={this.props.onChangeValorMax} 
                    value={this.props.filtroState.valorMax} />
                </label>
                <label>
                    <P>Buscar nome</P>
                    <Input type={"text"} onChange={this.props.onChangeName} 
                    value={this.props.filtroState.nome} />
                </label>
        </Filtro>
      </DivFilter>
    );
  }
}