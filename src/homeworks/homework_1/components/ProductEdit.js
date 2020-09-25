import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Table, Button, Input } from 'semantic-ui-react'

class ProductEdit extends Component {

   constructor(props) {
     super(props);
     this.state = {
       editedProduct: {...props.editedProductItem}
     }
   }

  onChangeProductTitle = (e) => {
    this.setState({    
      editedProduct: {...this.state.editedProduct, title: e.target.value}
    })
  }

  onChangeProductType = (e) => {
    this.setState({    
      editedProduct: {...this.state.editedProduct, type: e.target.value}
    })
  }

  onChangeProductPrice = (e) => {
    this.setState({    
      editedProduct: {...this.state.editedProduct, price: e.target.value}
    })
  }

  onChangeProductQuantity = (e) => {
    this.setState({    
      editedProduct: {...this.state.editedProduct, quantity: e.target.value}
    })
  }

  updateProduct = () => {
    const { editedProduct } = this.state;
    const { position } = this.props;
    this.props.updateEditedProduct(editedProduct, position);
  }

  onCansel = () => {
    const { editedProduct } = this.props.editedProductItem
    this.props.onCancelEdit()
  }

  render() {
    const { editedProduct} = this.state;
    const { position } = this.props;
    return (
    <Table.Row>
      <Table.Cell>
       {position + 1}
      </Table.Cell>
      <Table.Cell>
        <Input placeholder='Product' type="text" name='title' value={editedProduct.title} onChange={this.onChangeProductTitle}/>
      </Table.Cell>
      <Table.Cell>
        <Input placeholder='Type' type="text" name='type' value={editedProduct.type} onChange={this.onChangeProductType}/>
      </Table.Cell>
      <Table.Cell>
        <Input placeholder='Price' type="text" name='price' value={editedProduct.price} onChange={this.onChangeProductPrice}/>
      </Table.Cell>
      <Table.Cell>
        <Input placeholder='Quantity' type="number" min="1" name='quantity' value={editedProduct.quantity} onChange={this.onChangeProductQuantity}/>
      </Table.Cell>
      <Table.Cell>
        <Button onClick={this.updateProduct}>Save</Button>
        <Button onClick={this.onCansel}>Cancel</Button>
      </Table.Cell>
    </Table.Row>
    ) 
      
    }
}

export default ProductEdit

