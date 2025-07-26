const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {Array(20).fill("").map((e, index) => (
                <div key={index} className="card border border-gray-300 m-2 p-4 w-64 h-40 animate-pulse">
                    <div className="bg-gray-300 h-full w-full"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
