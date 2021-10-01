import React from 'react';
import styled from "styled-components";
// import './App.css';
import Header from './Components/Header';
import Filters from './Components/Filters';
import Products from './Components/Products';
import ShoppingCart from './Components/ShoppingCart';
import Footer from './Components/Footer';
import Apollo from './Components/image/fotos/apollo-xi.png'
import JoinDarkSide from './Components/image/fotos/join-dark-side.png'
import FutureWars from './Components/image/fotos/future-wars.png'
import NasaColored from './Components/image/fotos/nasa-colored.png'
import ISSBlue from './Components/image/fotos/ISS-blue.png'
import SpaceNavigation from './Components/image/fotos/space-navigation.png'

const Tela = styled.body`
margin: 0%;
padding: 0;
background-color: #E9EAE9;

@media (max-width: 767px){
    display: flex;
    flex-direction: column;
    max-width: auto;
}

`;

const DivApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px){
    display: flex;
    flex-direction: column;
    /* background-color: yellow; */
  }
`

export default class App extends React.Component {

  state = {
    valorMin: '',
    valorMax: '',
    nome: '',
    cartProducts: [],
    productsScreen: true,
  }

  onChangeValorMin = (event) => {
    this.setState({ valorMin: event.target.value })
    console.log(this.state.valorMin)
  }

  onChangeValorMax = (event) => {
    this.setState({ valorMax: event.target.value })
    console.log(this.state.valorMax)
  }

  onChangeName = (event) => {
    this.setState({ nome: event.target.value })
    console.log(this.state.nome)
  }

  // Funções do Carrinho

  addToCart = (value) => {
    const currentCart = [...this.state.cartProducts]
    console.log(currentCart)
    const produtoExistenteIndex = currentCart.findIndex(item => item.id === value.id)

    if (produtoExistenteIndex !== -1) {
      const newValue = { ...value, quantity: currentCart[produtoExistenteIndex].quantity + 1 }
      currentCart[produtoExistenteIndex] = newValue
      this.setState({ cartProducts: currentCart })

    } else {
      currentCart.push({ ...value, quantity: 1 })
      this.setState({ cartProducts: currentCart })
    }
  }

  decrementQuantity = (value) => {
    let currentCart

    if (value.quantity === 1) {
      currentCart = this.state.cartProducts.filter(item => item.id !== value.id)
    } else {
      currentCart = this.state.cartProducts.map(item => {
        if (item.id === value.id && value.quantity > 0) {
          return { ...value, quantity: value.quantity - 1 }
        } else {
          return item
        }
      })
    }

    this.setState({ cartProducts: currentCart })


  }

  increaseQuantity = (value) => {
    const currentCart = this.state.cartProducts.map((item, i) => {
      if (item.id === value.id) {
        return { ...value, quantity: value.quantity + 1 }
      }
      return item
    })
    this.setState({ cartProducts: currentCart })
  }

  // Life Cycles

  componentDidMount = () => {
    if (localStorage.getItem('CartItens')) {
      const userCart = localStorage.getItem('CartItens')
      this.setState({ cartProducts: JSON.parse(userCart) })
    }
  }

  componentDidUpdate = (prevState) => {
    if (prevState.cartProducts !== this.state.cartProducts) {
      localStorage.setItem('CartItens', JSON.stringify([...this.state.cartProducts]))
    }
  }

  // Telas

  handleScreen = () => {

  }

  changeCartScreen = () => {
    this.setState({ productsScreen: !this.state.productsScreen })
  }

  render() {

    const produtos = [
      {
        id: 1,
        name: "Camiseta Apollo XI",
        value: 79.99,
        imageUrl: Apollo
      },

      {
        id: 2,
        name: "Camiseta Join the Dark Side",
        value: 99.99,
        imageUrl: JoinDarkSide
      },

      {
        id: 3,
        name: "Camiseta Future Wars",
        value: 89.99,
        imageUrl: FutureWars
      },

      {
        id: 4,
        name: "Camiseta Nasa",
        value: 59.99,
        imageUrl: NasaColored
      },

      {
        id: 5,
        name: "Camiseta ISS",
        value: 79.99,
        imageUrl: ISSBlue
      },

      {
        id: 6,
        name: "Camiseta Space Navigators",
        value: 99.99,
        imageUrl: SpaceNavigation
      },
    ];
    if (this.state.productsScreen) {
      return (
        <Tela>
          <Header changeCartScreen={this.changeCartScreen} />
          <DivApp>
            <Filters onChangeValorMin={this.onChangeValorMin} onChangeValorMax={this.onChangeValorMax} onChangeName={this.onChangeName} filtroState={this.state} produtos={produtos} />
            <Products filtroState={this.state} produtos={produtos} addToCart={this.addToCart} />
          </DivApp>
          <Footer />
        </Tela>
      );
    } else {
      return (
        <>
          <Header changeCartScreen={this.changeCartScreen} />
          <ShoppingCart
            filtroState={this.state}
            produtos={produtos}
            cartProducts={this.state.cartProducts}
            decrementQuantity={this.decrementQuantity}
            increaseQuantity={this.increaseQuantity}
            removeItem={this.removeItem}
          />
        </>
      )
    }
  }
}
