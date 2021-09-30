import React from 'react';
import styled from "styled-components";
// import './App.css';
import Header from './Components/Header';
import Filters from './Components/Filters';
import Products from './Components/Products';
import ShoppingCart from './Components/ShoppingCart';
import Footer from './Components/Footer';

const Tela = styled.body`
margin: 0%;
padding: 0;
background-color: #E9EAE9;
`;

const DivApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default class App extends React.Component {

  state = {
    valorMin: '',
    valorMax: '',
    nome: '',
    cartProducts: []
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
    const currentCart = this.state.cartProducts.map((item, i) => {
      if (item.id === value.id && value.quantity > 0) {
        return { ...value, quantity: value.quantity - 1 }
      } else {
        return item
      }
    })
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

  removeItem = (value) => {
    const currentCart = [...this.state.cartProducts]
    const itemIndex = currentCart.findIndex(item => item.id === value.id)
    currentCart.splice(itemIndex, 1)
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

  render() {

    const produtos = [
      {
        id: 1,
        name: "Celular Iphone 12",
        value: 13000.50,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
      },

      {
        id: 2,
        name: "Celular Samsung Galaxy A32",
        value: 3000.99,
        imageUrl: "https://a-static.mlcdn.com.br/618x463/celular-samsung-galaxy-a32-128gb-octa-core-camera-quadrupla/gazinshop/9824/b87e1377a3d304ef717671fde7638147.jpg"
      },

      {
        id: 3,
        name: "Imac 27 polegadas",
        value: 9500.28,
        imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-og-202008?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1594849639000"
      },

      {
        id: 4,
        name: "Box Harry Potter",
        value: 150.50,
        imageUrl: "https://a-static.mlcdn.com.br/618x463/box-livros-j-k-rowling-edicao-especial-harry-potter-exclusivo/magazineluiza/227140500/becba34eb273ad15af40168776c19910.jpg"
      },

      {
        id: 5,
        name: "Kindle",
        value: 320.05,
        imageUrl: "https://images5.kabum.com.br/produtos/fotos/112795/kindle-10-geracao-preto-luz-integrada-wi-fi-8gb-ao0772_1589888301_g.jpg"
      },
    ];
    return (
      <Tela>
        <Header />
        <DivApp>
          <Filters onChangeValorMin={this.onChangeValorMin} onChangeValorMax={this.onChangeValorMax} onChangeName={this.onChangeName} filtroState={this.state} produtos={produtos} />
          <Products filtroState={this.state} produtos={produtos} addToCart={this.addToCart} />
          <ShoppingCart
            filtroState={this.state}
            produtos={produtos}
            cartProducts={this.state.cartProducts}
            decrementQuantity={this.decrementQuantity}
            increaseQuantity={this.increaseQuantity}
            removeItem={this.removeItem}
          />
        </DivApp>
        <Footer />
      </Tela>
    );
  }
}
