import ScoreBoard from "./ScoreBoard";

export default function GameNav() {
    return (
        <div className="flex justify-between items-center py-2 px-10 bg-[#163A5F]">
            {/* User name */}
            <h1 className="text-3xl">Hello User</h1>

            {/* Scoreboard */}
            <div className="flex w-max">
                <div className="flex w-full space-x-6">
                    <ScoreBoard title={"Current Score"} />
                    <ScoreBoard title={"All time Score"} />
                </div>

            </div>

        </div>
    )
}