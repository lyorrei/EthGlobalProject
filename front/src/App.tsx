import React from 'react'
import withContexts from './HOC/withContexts'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme'

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <div></div>
        </ThemeProvider>
    )
}

export default withContexts(App)
