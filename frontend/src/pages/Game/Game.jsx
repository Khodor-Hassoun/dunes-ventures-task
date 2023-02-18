import { useEffect } from "react"
import triviaApi from "../../api/trivaApi"
import GameNav from "../../components/GameNav"


export default function Game() {

    // useEffect(() => {
    //     triviaApi().then(res => {
    //         console.log(res)
    //     })
    // }, [])
    return (
        <section className="w-full h-screen bg-ming overflow-hidden">
            {/* Scores and user */}
            <div>
                <GameNav />
            </div>

            {/* Game */}
            <div className="flex flex-col h-full w-full py-2 px-10 mt-10 space-y-20">
                {/* Question */}
                <h1 className="text-4xl text-center">
                    Gordon Freeman, the protagonist of &quot;Half-Life&quot;, is said to have once had a ponytail.
                </h1>

                {/* Options */}
                <div className="flex justify-center w-full">
                    <div className="grid grid-cols-2 gap-4 w-4/5">
                        <div className="w-full bg-[#163A5F] py-3 rounded-md">
                            <p className=" text-center text-lg">2035</p>
                        </div>
                        <div className="w-full bg-[#163A5F] py-2 rounded-md">
                            <p className=" text-center text-lg">2035</p>
                        </div>
                        <div className="w-full bg-[#163A5F] py-3 rounded-md">
                            <p className=" text-center text-lg">2035</p>
                        </div>
                        <div className="w-full bg-[#163A5F] py-2 rounded-md">
                            <p className=" text-center text-lg">2035</p>
                        </div>
                    </div>
                </div>

                {/* Next question */}
                <div className="flex justify-center">
                    <button className="py-4 w-3/12 bg-[#163A5F] rounded-md">Next Question</button>
                </div>
            </div>
        </section>
    )
}