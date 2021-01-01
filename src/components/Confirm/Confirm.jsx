import React from 'react'
import { Button } from '../Common/StyledButton'
import { StyledConfirm } from './StyledConfirm'

const Confirm = ({ onConfirm=()=>{},onReject=()=>{},text,isOpen=false,setIsOpen }) => {
    return (
        <StyledConfirm className={isOpen ? 'open' : ''}>
            <p>{text}</p>
            <div className="btn-container">
                <Button onClick={() => {onConfirm();setIsOpen(false)}}>Да</Button>
                <Button onClick={() => {onReject();setIsOpen(false)}}>Не</Button>
            </div>
        </StyledConfirm>
    )
}

export default Confirm