"use client"
function error({ error }) {
    return (
        <div className="w-full text-center text-secondary-700">{error.message}😒 </div>
    )
}

export default error
