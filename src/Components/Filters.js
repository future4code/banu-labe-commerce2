import React from 'react';
import styled from "styled-components";

const DivFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 20vw;
    border: 1px solid black;
`;


export default class Filters extends React.Component {

  render() {
    return (
      <DivFilter>
        <form>
            <h3>Filtros:</h3>
                <label>
                    <p>Valor mínimo</p>
                    <input type={"number"} onChange={this.props.onChangeValorMin} value={this.props.filtroState.valorMin} />
                </label>
                <label>
                    <p>Valor máximo</p>
                    <input type={"number"} onChange={this.props.onChangeValorMax} value={this.props.filtroState.valorMax} />
                </label>
                <label>
                    <p>Buscar nome</p>
                    <input type={"text"} onChange={this.props.onChangeName} value={this.props.filtroState.nome} />
                </label>
        </form>
      </DivFilter>
    );
  }
}