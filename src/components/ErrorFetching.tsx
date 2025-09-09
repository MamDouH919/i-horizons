const ErrorFetching = ({
    returnButton,
}: {
    returnButton?: React.ReactNode
}) => {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="text-center">
                <p className="text-red-500 text-2xl">Error fetching data</p>
                {returnButton && returnButton}
            </div>
        </div>
    )
}

export default ErrorFetching