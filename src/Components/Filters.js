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
      const EstadoApp = this.props.filtroState;

    return (
      <DivFilter>
        <form>
            <h3>Filtros:</h3>
                <label>
                    <p>Valor mínimo</p>
                    <input />
                </label>
                <label>
                    <p>Valor máximo</p>
                    <input />
                </label>
                <label>
                    <p>Buscar nome</p>
                    <input />
                </label>
        </form>
      </DivFilter>
    );
  }
}