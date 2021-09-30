import React from 'react';
import styled from "styled-components";

const DivProductFilterOptions = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4vh;
`;


class SortItems extends React.Component {

state = {
    sortingParameter: "priceLowest"
}

updateSortingParameter = (ev) => {
    this.setState({
            sortingParameter: ev.target.value
    })
}


    render() {
        return (
            <div>
                <DivProductFilterOptions>
                    <label for="sort"> Ordenação: </label>
                    <select 
                        name="sort"
                        value={this.state.sortingParameter}
                        onChange={this.updateSortingParameter}>
                        <option value="priceLowest" onClick={null}>Menor preço</option>
                        <option value="priceHighest" onClick={null}>Maior preço</option>
                        <option value="title" onClick={null}>Ordem alfabética (A - Z)</option>
                        <option value="rating" onClick={null}>Avaliação dos clientes</option>
                    </select>
                </DivProductFilterOptions>
            </div>
        )
    }

}

export default SortItems