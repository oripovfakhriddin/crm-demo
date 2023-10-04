import { Fragment, Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const LoginPage = lazy(()=> import("./pages/loginPage/LoginPage"));
const ProductPage = lazy(() => import("./pages/productPage/ProductPage"))


function App() {
  

  return (
    <Fragment>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to="/login" />}/>
            <Route path='/login' element ={ <LoginPage /> }/>
            <Route path='product' element = { <ProductPage /> } /> 
          </Routes>
        </BrowserRouter>
      </Suspense>
      
    </Fragment>
  )
}

export default App
