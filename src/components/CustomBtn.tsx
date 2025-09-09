import { memo } from 'react'
import { Link } from 'react-router-dom'

const CustomBtn = ({
    to,
}: {
    to: string
}) => {
    return (
        <div>
            <Link to={to}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Details
                </button>
            </Link>
        </div>
    )
}

export default memo(CustomBtn)