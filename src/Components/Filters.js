import React from 'react';
import styled from "styled-components";

const DivFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 20vw;
    /* border: 1px solid black; */
`;

const Filtro = styled.form`
  padding-top: 10vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const P = styled.p`
  font-weight: 300;
  margin-bottom: 8px;
`;

const Input = styled.input`
border: 1px solid gray;
max-width: 10vw;
`;


export default class Filters extends React.Component {

  render() {
    return (
      <DivFilter>
        <Filtro>
            <h3>Filtros:</h3>
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