import React, { Fragment } from 'react'
import ProductCard from '../productCard/ProductCard'
import { Table } from 'react-bootstrap'

const ProductTable = ({allProducts, search, filterCategory,  editProduct, deleteProduct}) => {

  let resultProduct = allProducts.filter((product)=> product.name.toLowerCase().includes(search));

  if (filterCategory !== "all") {
    resultProduct = resultProduct.filter((product)=> product.category === filterCategory)
  }

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
          {resultProduct.length ? resultProduct.map((product, index)=><ProductCard 
            key={product.id} { ...product } 
            order={index+1} 
            editProduct = {editProduct}
            deleteProduct={deleteProduct}/>) : 
            <tr>
              <td className='text-center' colSpan={7}>
                No products
              </td>
            </tr>
            }
        </tbody>
      </Table>
    </Fragment>
  )
}

export default ProductTable