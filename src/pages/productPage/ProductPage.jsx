import React, { Fragment, useState } from 'react';
import { v4 } from 'uuid';
import { Col, Container, Row } from 'react-bootstrap';

import ProductForm from '../../components/productForm/ProductForm'
import ProductHeader from '../../components/header/productHeader'
import ProductTable from '../../components/productTable/ProductTable'

import { allProducts as constProducts } from '../../constants/const'
import { product as constProduct } from '../../constants/const'
import { toast } from 'react-toastify';

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem("products")) || constProducts);
  const [product, setProduct] = useState(constProduct);
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null); 
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all") 

  const handleProduct = (e) => {
    let newProduct = { ...product, [e.target.id]: e.target.value }
    setProduct(newProduct)
  }

  const resetProduct = () => {
    setProduct(constProduct)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      let newAllProducts
      let newProduct = {...product, price: +product.price, quantity: +product.quantity, id: v4()};
      if (selected === null) {
        newAllProducts = [...allProducts, newProduct];
        toast.success("Add succesfully", {
          autoClose: 1500,
        });
      } else {
        newAllProducts = allProducts.map((product)=>{
          if (product.id === selected) {
            return newProduct;
          } else {
            return product;
          }
        })
        toast.success("Edited succesfully", {
          autoClose: 1500,
        })
      }
      localStorage.setItem("products", JSON.stringify(newAllProducts))
      setAllProducts(newAllProducts);
      resetProduct();
      setSelected(null)
    } else {
      setValidated(true);
    }
  };

  const editProduct = (id) => {
    setSelected(id)
    let product =  allProducts.find((product)=> product.id === id)
    setProduct(product)
  }


  const deleteProduct = (id) => {
    let checkDelete = window.confirm("Are you sure you want to delete this debtor?");
    if (checkDelete) {
      let newAllProducts = allProducts.filter((product)=> product.id !== id)
      localStorage.setItem("products", JSON.stringify(newAllProducts));
      setAllProducts(newAllProducts);
      toast.success("Deleted succesfuly", {
        autoClose: 1500,
      })
    }
  }


  return (
    <Fragment>
      <Container className='mt-3 py-3'>
        <Row>
          <Col md="4">
            <ProductForm 
              product= {product} 
              validated={validated} 
              handleProduct={handleProduct} 
              handleSubmit={handleSubmit}
              selected={selected}
              />
              
          </Col>
          <Col col="8">
            <ProductHeader 
              search={search}
              filterCategory = {filterCategory}
              setFilterCategory = {setFilterCategory}
              setSearch={setSearch}
            />
            <ProductTable 
              allProducts = {allProducts} 
              search={search}
              filterCategory={filterCategory}
              editProduct = {editProduct}
              deleteProduct={deleteProduct}/>
          </Col>
        </Row>
      </Container>
      
    </Fragment>
  )
}

export default ProductPage