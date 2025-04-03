import React from 'react'
import { useFormStatus } from 'react-dom'
import SpinnerMini from './SpinnerMini'

function SubmitBtton({ children, className, ...rest }) {
    const { pending } = useFormStatus()
    return (
        <button
            disabled={pending}
            {...rest}
            className={`flex items-center justify-center py-4 gap-x-4 ${className}`}
        >
            {children}
            {pending && <SpinnerMini />}
        </button >
    )
}

export default SubmitBtton
