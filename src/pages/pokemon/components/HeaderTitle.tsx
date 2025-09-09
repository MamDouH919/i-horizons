import { ArrowBigLeft } from "lucide-react"
import { Link } from "react-router-dom"

const HeaderTitle = ({
    title,
    to,
}: {
    title: string
    to: string
}) => {
    return (
        <div className="bg-blue-500 px-6 py-4">
            <div className="flex items-center gap-2">
                <Link to={to}>
                    <ArrowBigLeft className="text-white" />
                </Link>
                <h1 className="text-white text-2xl font-bold capitalize">{title}</h1>
            </div>
        </div>
    )
}

export default HeaderTitle