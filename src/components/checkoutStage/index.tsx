import React from 'react'
import {  AiOutlineCheck } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { Stage, StageItem } from './style'

interface Props {
    stage: number
}

const CheckoutStage: React.FC<Props> = ({ stage }) => {
    console.log(stage)
    return (
        <Stage>
            <StageItem isActive={stage === 0}>
                <GoLocation />
                <p>Address</p>
            </StageItem>
            <StageItem isActive={stage === 1}>
                <FaEthereum />
                <p>Stake</p>
            </StageItem>
            <StageItem isActive={stage === 2}>
                <AiOutlineCheck />
                <p>Confirmation</p>
            </StageItem>
        </Stage>
    )
}

export default CheckoutStage
