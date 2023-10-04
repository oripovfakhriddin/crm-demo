import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'

const ProductCard = ({id, name, price, category, quantity, description, order, editProduct, deleteProduct}) => {
  return (
    <Fragment>
      <tr>
        <td className='text-center'>{order}.</td>
        <td className='text-center'>{name}</td>
        <td className='text-center'>{category}</td>
        <td className='text-center'>{price} $</td>
        <td className='text-center'>{quantity}</td>
        <td className='text-center'>...{description.slice(0-10)}</td>
        <td className='text-end'>
          <Button onClick={()=>{editProduct(id)}} className='btn btn-info me-3'>Edit</Button>
          <Button onClick={()=>{deleteProduct(id)}} className='btn btn-danger'>Delete</Button>
        </td>
      </tr>
    </Fragment>
  )
}

export default ProductCard