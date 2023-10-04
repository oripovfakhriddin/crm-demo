import React, { Fragment } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { productCategory } from '../../constants/const'

const ProductHeader = () => {
  return (
    <Fragment>
      <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon2">
          <Form.Select>
            <option value="all">All Products</option>
            {productCategory.map((product)=>(
              <option key={product} value={product}>{product}</option>
            ))}
          </Form.Select>
        </InputGroup.Text>
        <Form.Control placeholder="Searching products..."/>
        <InputGroup.Text id="basic-addon2">
          <Form.Select>
            <option value="all">Sorting Price</option>
            <option value="increase">Min-Max</option>
            <option value="decrease">Max-Min</option>
          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
    </Fragment>
  )
}

export default ProductHeader