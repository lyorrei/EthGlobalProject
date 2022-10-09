import React from 'react'
import withContexts from './HOC/withContexts'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme'

import { Routes, Route } from 'react-router-dom'
import Home from './components/home'

import GlobalStyle from './styles/global'

import Navbar from './components/navbar'

import styled from 'styled-components'
import Restaurant from './components/restaurants'
import RestaurantInformation from './components/restaurantInformation'

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
                    <Route path="/restaurants/:id" element={<RestaurantInformation />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </PageContainer>

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default withContexts(App)
