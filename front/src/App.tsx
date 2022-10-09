import React from 'react'
import withContexts from './HOC/withContexts'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme'

import { Routes, Route } from 'react-router-dom'
import Home from './components/home'

import GlobalStyle from './styles/global'
import Login from './components/login'

import RestaurantHome from './components/restaurantHome'
import Deliveryman from './components/deliveryman'

import Navbar from './components/navbar'

import styled from 'styled-components'
import Restaurant from './components/restaurants'

const PageContainer = styled.div`
    padding-top: calc(5vh + 7.2rem);
`

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>

            <Navbar />
            <PageContainer>
                <Routes>
                    <Route path="/login/customer" element={<Login />} />
                    <Route path="/login/restaurant" element={<RestaurantHome />} />
                    <Route path="/login/delivery" element={<Deliveryman />} />
                    <Route path="/restaurants" element={<Restaurant />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </PageContainer>

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default withContexts(App)
