import { memo } from "react"

const Loading = ({ show }: { show: boolean }) => {
    return (
        <div className={`${show ? "flex" : "hidden"} items-center justify-center h-screen w-screen`}>
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="text-gray-600 text-lg">Loading...</p>
            </div>
        </div>
    )
}

export default memo(Loading)