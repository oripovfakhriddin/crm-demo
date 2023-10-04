import React, { Fragment } from 'react'
import ProductCard from '../productCard/ProductCard'
import { Table } from 'react-bootstrap'

const ProductTable = ({allProducts, editProduct, deleteProduct}) => {
  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th className='text-end'>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product, index)=><ProductCard 
            key={product.id} { ...product } 
            order={index+1} 
            editProduct = {editProduct}
            deleteProduct={deleteProduct}/>)}
        </tbody>
      </Table>
    </Fragment>
  )
}

export default ProductTable