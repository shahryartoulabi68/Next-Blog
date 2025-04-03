
function Table({ children }) {
    return (
        <div className='w-full overflow-x-auto rounded-xl border border-secondary-200 whitespace-nowrap'>
            <table className=" border w-full overflow-hidden">
                {children}
            </table>
        </div>
    )
}

export default Table


function TableHeader({ children }) {
    return <thead className="bg-secondary-50 overflow-hidden">
        <tr>
            {children}
        </tr>
    </thead>
}

function TableBody({ children }) {
    return <tbody className="">
        {children}
    </tbody>
}

function TableRow({ children }) {
    return <tr className="bg-secondary-0 border border-b">{children}</tr>
}

Table.Headr = TableHeader
Table.body = TableBody
Table.Row = TableRow