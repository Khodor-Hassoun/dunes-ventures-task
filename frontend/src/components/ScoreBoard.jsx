export default function ScoreBoard({ title, score }) {
    return (
        <div className="flex flex-col justify-center items-center rounded-md overflow-hidden w-[120px]">
            {/* Title */}
            <h2 className="bg-ming w-full p-2 text-base text-center">{title}</h2>

            {/* Result */}
            <div className="bg-white text-black w-full flex justify-center items-center overflow-x-auto overflow-hidden">
                <div className="py-2">
                    <p className="text-2xl font-black ">{score}</p>
                </div>
            </div>
        </div>
    )
}