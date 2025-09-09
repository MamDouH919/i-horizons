import { memo } from "react"
import { Link } from "react-router-dom"

const ErrorFetching = ({ show }: { show: boolean }) => {
    return (
        <div className={`${show ? "flex" : "hidden"} items-center justify-center h-screen w-screen`}>
            <div className="text-center">
                <p className="text-red-500 text-md">Error fetching data</p>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    )
}

export default memo(ErrorFetching)