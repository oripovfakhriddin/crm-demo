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
            <th className='text-center'>Name</th>
            <th className='text-center'>Category</th>
            <th className='text-center'>Price($)</th>
            <th className='text-center'>Quantity</th>
            <th className='text-center'>Description</th>
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