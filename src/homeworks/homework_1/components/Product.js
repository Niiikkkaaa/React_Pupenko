import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Table, Button, Input } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import ProductEdit from './ProductEdit'

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  onEdit = () => {
    this.setState({ 
      isEdit: true
  })
 }

 updateProduct = (editedProd, position) => {
  //const {editedProduct} = this.state;
  this.setState({
    isEdit: false
  })
  this.props.onUpdateProduct(editedProd, position);
}

  onCancel = () => {
    this.setState({
      isEdit: false
  })
  }

  render() {
    const { isEdit } = this.state;
    const { product, position, onRemoveProduct } = this.props;
    if (isEdit) return (
    <ProductEdit 
    position = {position}
    editedProductItem = {product}
    updateEditedProduct = {this.updateProduct}
    onCancelEdit = {this.onCancel}
    />
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
