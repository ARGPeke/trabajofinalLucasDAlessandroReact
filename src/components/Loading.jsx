const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center mt-5">
                    <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;