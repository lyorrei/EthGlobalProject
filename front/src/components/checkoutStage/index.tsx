import React from 'react'
import {  AiOutlineCheck } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { Stage, StageItem } from './style'

interface Props {
    stage: number
}

const CheckoutStage: React.FC<Props> = ({ stage }) => {
    return (
        <Stage>
            <StageItem isActive={stage === 0}>
                <GoLocation />
                <p>Address</p>
            </StageItem>
            <StageItem isActive={stage === 1}>
                <AiOutlineCheck />
                <p>Confirmation</p>
            </StageItem>
        </Stage>
    )
}

export default CheckoutStage
