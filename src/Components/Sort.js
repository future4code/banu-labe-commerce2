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
            sortingParameter: ev.target.value})
            console.log(this.state.sortingParameter)
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
                        <option value="priceLowest" onClick={this.props.onClickPriceLowest}>Menor preço</option>
                        <option value="priceHighest" onClick={this.props.onClickPriceHighest}>Maior preço</option>
                        <option value="name" onClick={this.props.onClickTitle}>Ordem alfabética (A - Z)</option>
                        <option value="rating" onClick={this.props.onClickRating}>Avaliação dos clientes</option>
                    </select>
                </DivProductFilterOptions>
            </div>
        )
    }

}

export default SortItems