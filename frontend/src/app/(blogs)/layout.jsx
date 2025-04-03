import React from 'react'
import Header from '../components/Header'

function layaout({children}) {
    return (
        <>
            <Header />
            <div className="container xl:max-w-screen-xl">
                {children}
            </div>
        </>
    )
}

export default layaout
