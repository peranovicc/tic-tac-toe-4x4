import { useState } from 'react'

export const useConfirm = (open,confirmFn,rejectFn,prompt) => {
    const [isOpen,setIsOpen] = useState(open)
    const [onConfirm,setOnConfirm] = useState(confirmFn)
    const [onReject,setOnReject] = useState(rejectFn)

    return [isOpen,setIsOpen,onConfirm,setOnConfirm,onReject,setOnReject]
}