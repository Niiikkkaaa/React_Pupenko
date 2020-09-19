import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Table, Input } from 'semantic-ui-react'
import Product from './components/Product';
 
class Week1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          id: '1', 
          title: 'Mac Book Pro',
          type: 'device',
          price: '2000$',
          quantity: '3',
         },
         {
          id: '2', 
          title: 'iPad Air',
          type: 'device',
          price: '500$',
          quantity: '10',
         },
         {
          id: '3', 
          title: 'iPhone XR',
          type: 'clothes',
          price: '800$',
          quantity: '5',
         }
      ],
      newProduct: ''
    }
  }

  addProduct = () => {
    const { products, newProduct } = this.state;//берём атрибуты из состояния 
    //products.push('test')
    if(newProduct.title == '' || newProduct.type == '' || newProduct.price == '' || newProduct.quantity == ''){
      alert('Field is empty!')
    }
    else {
    this.setState({
      products: [ ...products, { id: Math.random().toString(4), ...newProduct}],//копируем массив, и добавляем туда значение newProduct
      newProduct: {title: '', type: '', price: '', quantity: ''}
    })
   }
  }

  onChange = (e) => {
    this.setState({
      newProduct: e.target.value
    })
  }

  onChangeTitle = (e) => {
    this.setState({    
      newProduct: {...this.state.newProduct, title: e.target.value}
    })
  }

  onChangeType = (e) => {
    this.setState({    
      newProduct: {...this.state.newProduct, type: e.target.value}
    })
  }

  onChangePrice = (e) => {
    this.setState({    
      newProduct: {...this.state.newProduct, price: e.target.value}
    })
  }

  onChangeQuantity = (e) => {
    this.setState({    
      newProduct: {...this.state.newProduct, quantity: e.target.value}
    })
  }

  removeProduct = (removedIndex) => {
    const { products } = this.state;
    this.setState({
      products: products.filter((product, i) => i !== removedIndex)
    })
  }

  updateProduct = (updateProduct, updatedIndex) => {
    const { products } = this.state;
    this.setState({
      products: products.map((product, i) => i === updatedIndex ? updateProduct : product)
    })
  }

  render() {
    const { products, newProduct } = this.state
    return (
      <div>
        <h2>Product`s list:</h2>
        <Table >
          <Table.Header>
              <Table.Row>
                  <Table.HeaderCell>#</Table.HeaderCell>
                  <Table.HeaderCell>Product</Table.HeaderCell>
                  <Table.HeaderCell>Type</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
          </Table.Header>

          <Table.Body>
          { 
          products.map((product, i) =>
          <Product 
            product={product} 
            position={i} 
            key={i}
            onRemoveProduct={this.removeProduct}
            onUpdateProduct={this.updateProduct}
            />
          )
          }
            </Table.Body>
      </Table>
        <Input type="text" placeholder="Title"  value={newProduct.title} onChange={this.onChangeTitle}/>
        <Input type="text" placeholder="Type" value={newProduct.type} onChange={this.onChangeType}/>
        <Input type="text" placeholder="Price" value={newProduct.price} onChange={this.onChangePrice}/>
        <Input type="number" placeholder="Quantity" value={newProduct.quantity} min="1" onChange={this.onChangeQuantity}/>
        <button type="submit"  onClick={this.addProduct}>Add</button>
     
      </div> 
    )
  }
}

export default Week1;
