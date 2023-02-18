import ScoreBoard from "./ScoreBoard";

export default function GameNav({ scores }) {
    return (
        <div className="flex justify-between items-center py-2 px-10 bg-[#163A5F]">
            {/* User name */}
            <h1 className="text-3xl">Hello User</h1>

            {/* Scoreboard */}
            <div className="flex w-max">
                <div className="flex w-full space-x-6">
                    <ScoreBoard title={"Current Score"} score={scores[0]} />
                    <ScoreBoard title={"All time Score"} score={scores[1]} />
                </div>

            </div>

        </div>
    )
}