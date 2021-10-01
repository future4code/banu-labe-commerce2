import React from 'react';
import styled, { keyframes, css } from "styled-components";
import { createGlobalStyle } from 'styled-components'
import Ame from './image/ame.png';
import Mastercard from './image/mastercard.png';
import Picpay from './image/picpay.png';
import Pix from './image/pix.png';
import Visa from './image/visa.png'


const BodyComponent = styled.div`
  height: 85vh;
  display: grid;
  grid: 1fr / 40% 30%;
  justify-content: center;
  justify-items: center;
  grid-template-areas: 'Itens Ordering';

  @media (max-width: 1100px) {
    grid: 50% 100% / 100%;
    grid-template-areas:
     'Itens Itens',
     'Ordering Ordering';
  }
`
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
  }
`
const Container = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: #FFFFFF;
    width: 0.001px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #00000020;
    border-radius: 5px;
  }
  
`
const ContainerTitle = styled.span`
  font-size: 2.5em;
  font-weight: 700;
  color: #00000090;
  display: block;
  margin-bottom: 20px;
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
  width: 90%;
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
  min-height: 80px;
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 725px) {
    width: 70%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`
const flexMixin = css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`
const Image = styled.img`
  width: 70px;
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
  color: #00000090;
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
  width: 100%;
  display: flex;
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
const SubTotal = styled.div`
  font-size: 1.2em;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #00000020;
`
const Shipping = styled(SubTotal)`
`
const SubTotalTitle = styled(Title)`
`
const ShippingTitle = styled(SubTotalTitle)`
`
const ShippingPrice = styled(SubTotalTitle)`
  color: green;
  text-transform: uppercase;
  font-size: 0.7em;
`
const TotalAmount = styled(ShippingTitle)`
`
const AmountItens = styled(SubTotal)`
`
const AmountItensTitle = styled(ShippingTitle)`
`
const Total = styled(SubTotal)`
  border: none;
`
const TotalTitle = styled(ShippingTitle)`
  font-size: 1.8em;
  @media (max-width: 550px) {
    font-size: 1.4em;
  }
`
const TotalValue = styled(TotalTitle)`
  font-size: 1.7em;
  @media (max-width: 550px) {
    font-size: 1.4em;
  }
`

const TotalPrice = styled(SubTotalTitle)`
`
const TaxesInfo = styled(ShippingTitle)`
  font-size: 0.6em;
`
const PaymentInfo = styled(TaxesInfo)`
`
const PaymentFlagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const PaymentFlags = styled.img`
  width: 40px;
`

const OrderingWrapper = styled.div`
  margin-top: 30px;
  grid-area: 'Ordering';
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  width: 80%;
  height: 80vh;
`
const Ordering = styled.div`
  width: 100%;
  height: 55%;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`
const PaymentMethods = styled(Ordering)`
  margin-top: 10px;
  height: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`

const PayContainer = styled(PaymentMethods)`
`

const PayButton = styled.button`
  background-color: #00acb7;
  border: none;
  padding: 0.9em;
  border-radius: 6px;
  color: #FFFFFF;
  font-size: 1em;
  font-family: 'Montserrat';
  font-weight: 500;
  transition: transform 300ms ease;
  cursor: pointer;
  &:active {
    transform: scale(0.97)
  }
`
const Itens = styled(Container)`
  width: 100%;
  overflow-y: hidden;
  grid-area: 'Itens';
  @media (max-width: 425px) {
    padding: 20px 0;
  }
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
        <BodyComponent>
          <GlobalStyle/>
          <Itens>
            <ContainerTitle>Meus itens</ContainerTitle>
            <Container>
              {this.props.cartProducts.map((value, i) => {
              return (
                  <Wrapper key={i}>
                    <Image src={value.imageUrl}/>
                    <InfoWrapper>
                      <Title>{value.name}</Title>
                      <Description>{}</Description>
                      <ValueWrapper>
                        <Price><Currency>R$</Currency>{value.value}</Price>
                        <AmountWrapper>
                          <Decrement onClick={() => this.props.decrementQuantity(value)}>-</Decrement>
                          <Amount>{value.quantity}</Amount>
                          <Increase onClick={() => this.props.increaseQuantity(value)}>+</Increase>
                        </AmountWrapper>
                      </ValueWrapper>
                    </InfoWrapper>
                  </Wrapper>
                  )
                })
              }
            </Container>
          </Itens>   
          <OrderingWrapper>
            <Ordering>
              <SubTotal>
                <SubTotalTitle>Subtotal</SubTotalTitle>
                <TotalPrice>{this.totalValue() > 0 ? `R$ ${this.totalValue()}` : null}</TotalPrice>
              </SubTotal>
              <Shipping>
                <ShippingTitle>Frete</ShippingTitle>
                <ShippingPrice>Grátis</ShippingPrice>
              </Shipping>
              <AmountItens>
                <AmountItensTitle>Total de Itens</AmountItensTitle>
                <TotalAmount>{this.totalItens() === 0 ? null : this.totalItens()}</TotalAmount>
              </AmountItens>
              <Total>
                <TotalTitle>Total</TotalTitle>
                <TotalValue>{this.totalValue() > 0 ? `R$${this.totalValue()}` : null}</TotalValue>
              </Total>
              <TaxesInfo>Taxas e impostos adicionais podem ser aplicados.</TaxesInfo>
            </Ordering>
            <PaymentMethods>
              <PaymentInfo>Métodos de pagamentos aceitos</PaymentInfo>
              <PaymentFlagsContainer>
                  <PaymentFlags src={Mastercard} alt={'Mastercard'}/>
                  <PaymentFlags src={Visa} alt={'Visa'}/>
                  <PaymentFlags src={Picpay} alt={'Picpay'}/>
                  <PaymentFlags src={Ame} alt={'Ame'}/>
                  <PaymentFlags src={Pix} alt={'Pix'}/>
              </PaymentFlagsContainer>
            </PaymentMethods>
            <PayContainer>
              <PayButton>Finalizar Pedido</PayButton>
            </PayContainer>
          </OrderingWrapper>
        </BodyComponent>
    );
  }
}