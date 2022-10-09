import React from 'react'
import withContexts from './HOC/withContexts'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme'

import { Routes, Route } from 'react-router-dom'
import Home from './components/home'

import GlobalStyle from './styles/global'

import Navbar from './components/navbar'

import styled from 'styled-components'
import Deliveryman from './components/deliveryman'
import Restaurant from './components/restaurants'
import RestaurantHome from './components/restaurantHome'
import RestaurantInformation from './components/restaurantInformation'
import Checkout from './components/checkout'

const PageContainer = styled.div`
    padding-top: calc(5vh + 7.2rem);
`

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>

            <Navbar />
            <PageContainer>
                <Routes>
                    <Route path="/restaurants" element={<Restaurant />} />
                    <Route path="/restaurantHome/" element={<RestaurantHome />} />
                    <Route path="/deliveryman" element={<Deliveryman />} />
                    <Route path="/restaurants/:id" element={<RestaurantInformation />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/restaurant" element={<RestaurantHome />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </PageContainer>

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default withContexts(App)
