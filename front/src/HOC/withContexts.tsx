import React from 'react'
import AuthProvider from '../contexts/auth'

function withContexts(Component: any) {
    return (props: any) => <AuthProvider><Component {...props} /></AuthProvider>
}

export default withContexts
