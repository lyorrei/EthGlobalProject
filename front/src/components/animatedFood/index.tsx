import React, { Suspense } from 'react'
import Spinner from '../spinner'
import { Container } from './style'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

export default function AnimatedFood() {
    return (
        <Container>
            <Suspense fallback={<Spinner />}>
                <Spline scene="https://prod.spline.design/baPSaVrPA1CYXHGE/scene.splinecode" />
            </Suspense>
        </Container>
    )
}
