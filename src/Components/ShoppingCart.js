import React from 'react';
import styled, { keyframes, css } from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 500px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: #FFFFFF;
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #00000020;
    border-radius: 5px;
  }
  
`
const ContainerTitle = styled.span`
  font-size: 1.2em;
  font-weight: 700;
  color: #00000070;
`
const show = keyframes`
  0% {
    opacity: 0
  }

  100% {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  width: 300px;
  height: 80px;
  border-radius: 12px;
  background-color: #FFFFFF;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 8px;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 5px;
  animation: ${show} 200ms linear;
`
const WrapperCarrinho = styled(Wrapper)`
  width: 100%;
  min-height: 80px;
`

const flexMixin = css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const Image = styled.img`
  width: 25%;
  height: 100%;
  background-color: #00000015;
  border-radius: 6px ;
`
const InfoWrapper = styled.div`
  width: 72%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
`
const Title = styled.span`
  font-size: 0.85em;
  font-weight: 600;
  color: #00000070;
`
const Description = styled.span`
  font-size: 0.7em;
  font-weight: 400;
  color: #00000070;
`
const Price = styled.span`
  font-size: 0.8em;
  font-weight: 600;
  color: #00000070;
`
const Currency = styled.span`
  font-size: 0.9em;
  font-weight: 600;
  color: #00000070;
  padding-right: 3px;
`
const ValueWrapper = styled.div`
  /* background-color: lightgray; */
  width: 100%;
  display: flex;
  /* justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center; */
  ${flexMixin}
`
const AmountWrapper = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-evenly;
  align-items: center;
`
const Decrement = styled.button`
  width: 17px;
  height: 17px;
  border: 1.75px solid #00000050;
  background-color: transparent;
  border-radius: 4px;
  color: #00000070;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const Amount = styled.span`
  font-size: 0.75em;
  font-weight: 600;
  color: #00000070;
`
const Increase = styled.button`
  width: 17px;
  height: 17px;
  border: 1.75px solid #00000015;
  background-color: #00000070;
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 500;
  cursor: pointer;
  
`
const TotalAmount = styled.span`
  font-size: 0.9em;
  font-weight: 600;
  color: #00000070;
  padding: .5em 1.5em;
  border-radius: 6px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
const TotalPrice = styled.span`
  font-size: 0.9em;
  font-weight: 700;
  color: #00000070;
  padding: .5em 1.5em;
  border-radius: 6px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const OrderingWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

// Products

export default class ShoppingCart extends React.Component {

  totalItens = () => {
    return this.props.cartProducts.reduce((acc, value) => acc + value.quantity, 0)
  }

  totalValue = () => {
    return this.props.cartProducts.reduce((acc, item) => acc + (item.value * item.quantity), 0).toFixed(2)
  }

  render() {
    return (
      <div>
          <Container>
            <ContainerTitle>Carrinho</ContainerTitle>
            {this.props.cartProducts.map((value, i) => {
            return (
                <WrapperCarrinho key={i}>
                  <Image src={value.imageUrl}/>
                  <InfoWrapper>
                    <Title>{value.name}</Title>
                    <Description>{}</Description>
                    <ValueWrapper>
                      <Price><Currency>R$</Currency>{value.value}</Price>
                      <AmountWrapper>
                        <Decrement onClick={() => this.props.decrementQuantity(value)}>-</Decrement>
                        <Amount>{value.quantity > 0 ? value.quantity : this.props.removeItem(value)}</Amount>
                        <Increase onClick={() => this.props.increaseQuantity(value)}>+</Increase>
                      </AmountWrapper>
                    </ValueWrapper>
                  </InfoWrapper>
                </WrapperCarrinho>
                )
              })
            }
        </Container>   
        <OrderingWrapper>
            <TotalAmount>{this.totalItens() === 0 ? null : `Itens: ${this.totalItens()}`}</TotalAmount>
            <TotalPrice>{this.totalValue() > 0 ? `R$ ${this.totalValue()}` : null}</TotalPrice>
        </OrderingWrapper>
      </div>
    );
  }
}