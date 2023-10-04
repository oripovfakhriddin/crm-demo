import { Fragment, memo } from 'react'
import { Button, Form } from 'react-bootstrap'

import propTypes from "prop-types"

import { productCategory } from '../../constants/const'


const ProductForm = ({validated, product,  handleSubmit, handleProduct, selected}) => {
  return (
    <Fragment>
      <h1  className='text-center opacity-75'>Add products</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Product name: </Form.Label>
          <Form.Control value={product.name} onChange={handleProduct}  placeholder='Product name' required type="text"/>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Product price: </Form.Label>
          <Form.Control value={product.price} onChange={handleProduct} placeholder='Price' required  type="number" />
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'  controlId="category">
          <Form.Select value={product.category} onChange={handleProduct}>
            {productCategory.map((product)=>(
              <option key={product} value={product}>{product}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Quantity: </Form.Label>
          <Form.Control value={product.quantity} onChange={handleProduct} placeholder='Quantity' required type="number" />
          <Form.Control.Feedback type="invalid"> Please fill ! </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-4'  controlId="description">
          <Form.Label> Description: </Form.Label>
          <Form.Control value={product.description} required as="textarea" type="text" placeholder="Description" onChange={handleProduct} />
          <Form.Control.Feedback type='invalid'> Please fill! </Form.Control.Feedback>
        </Form.Group>

        <Button type='submit'>{selected === null ? "Add product" : "Save product" }</Button>
      </Form>
    </Fragment>
  )
}

ProductForm.propTypes = {
  validated: propTypes.bool
}

const MemoProductForm = memo(ProductForm)

export default MemoProductForm;