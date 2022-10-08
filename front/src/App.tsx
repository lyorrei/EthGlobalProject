import React from 'react'
import withContexts from './HOC/withContexts'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme'

import { Routes, Route } from 'react-router-dom'
import Home from './components/home'

import GlobalStyle from './styles/global'
import Login from './components/login'
import RestaurantHome from './components/restaurantHome'

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/customer" element={<Login />} />
                <Route path="/login/restaurant" element={<RestaurantHome />} />
                <Route path="/login/delivery" element={<Login />} />
            </Routes>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default withContexts(App)
