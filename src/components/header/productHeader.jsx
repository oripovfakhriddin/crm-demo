import { Fragment, memo } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

import propTypes from "prop-types"

import { productCategory } from '../../constants/const'

const ProductHeader = ({search, filterCategory, setFilterCategory, setSearch}) => {
  return (
    <Fragment>
      <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon2">
          <Form.Select value={filterCategory} onChange={(e)=>{setFilterCategory(e.target.value)}}>
            <option value="all">All Products</option>
            {productCategory.map((product)=>(
              <option key={product} value={product}>{product}</option>
            ))}
          </Form.Select>
        </InputGroup.Text>
        <Form.Control value={search} onChange={(e)=>{setSearch(e.target.value.trim().toLowerCase())}} placeholder="Searching products..."/>
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

ProductHeader.propTypes = {
  search: propTypes.string, 
  filterCategory: propTypes.string,
  setFilterCategory: propTypes.func,
  setSearch: propTypes.func,
}

const MemoProductHeader = memo(ProductHeader)

export default MemoProductHeader