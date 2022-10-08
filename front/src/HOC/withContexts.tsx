import React from 'react'

function withContexts(Component: any) {
    return (props: any) => <Component {...props} />
}

export default withContexts
