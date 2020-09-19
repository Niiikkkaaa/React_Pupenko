import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Table, Button, Input } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editedProduct: props.product,
      isEdit: false
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

  onEdit = () => {
    this.setState({ 
      isEdit: true
  })
 }

 updateProduct = () => {
  const { editedProduct } = this.state;
  const { position } = this.props;
  this.props.onUpdateProduct(editedProduct, position);
  this.setState({ isEdit: false })
}

  onCancel = () => {
    this.setState({
      isEdit: false,
      editedProduct: this.props.product
  })
  }

  render() {
    const { isEdit, editedProduct} = this.state;
    const { product, position, onRemoveProduct } = this.props;
    if (isEdit) return (
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
        <Button onClick={this.onCancel}>Cancel</Button>
      </Table.Cell>
    </Table.Row>
    ) 
       return (
        <Table.Row>
        <Table.Cell>{position + 1}</Table.Cell>
        <Table.Cell>{product.title}</Table.Cell>
        <Table.Cell>{product.type}</Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
        <Table.Cell>{product.quantity}</Table.Cell>
        <Table.Cell>
         <Icon name='edit'  onClick={this.onEdit} />
         <Icon name='trash' onClick={() => onRemoveProduct(position)}/>
        </Table.Cell>
        </Table.Row>  
      )
    }
}

export default Product