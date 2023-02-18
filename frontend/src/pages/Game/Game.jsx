import { useEffect, useState } from "react"
import triviaApi from "../../api/trivaApi"
import GameNav from "../../components/GameNav"


export default function Game() {
    const [gameQA, setGameQA] = useState({
        category: "",
        question: "",
        difficulty: "",
        correct_answer: "",
        incorrect_answers: [],
    })
    const [answer, setAnswer] = useState()
    const [localScore, setLocalScore] = useState(0)
    const [gloabalScore, setGlobalScore] = useState(0)
    const [nextQ, setnextQ] = useState(false)
    const [isSelectedAnswer, setIsSelectedAnswer] = useState(false)

    useEffect(() => {
        triviaApi().then(res => {
            console.log(res)
            setGameQA(res)
            setIsSelectedAnswer(false)
            setAnswer(undefined)
        })
    }, ["", nextQ])

    function handleNextQ() {
        setnextQ(bool => !bool)
    }

    function handleAnswer(choice) {
        if (isSelectedAnswer) return
        if (choice !== gameQA.correct_answer) {
            setAnswer("wrong")
            setIsSelectedAnswer(true)
            return
        }
        setAnswer('correct')
        setLocalScore(prev => prev + 1)
        setIsSelectedAnswer(true)
        console.log("corerctttttttttttttttttttttttttttttttt")
    }
    if (gameQA.incorrect_answers.length === 0) {
        return <h1 className="text-2xl">Loading</h1>
    }
    return (
        <section className="w-full h-screen bg-ming overflow-hidden">
            {/* Scores and user */}
            <div>
                <GameNav scores={[localScore, gloabalScore]} />
            </div>

            {/* Game */}
            <div className="flex flex-col h-full w-full py-2 px-10 mt-10 space-y-20">
                {/* Question */}
                <h1 className="text-4xl text-center">
                    {`${gameQA.question}`}
                </h1>

                {/* Options */}
                <div className="flex flex-col items-center w-full">
                    <div className="grid grid-cols-2 gap-4 w-4/5 cursor-pointer">
                        {
                            gameQA.incorrect_answers.map(answer => (
                                <div className="w-full bg-[#163A5F] py-3 rounded-md" key={answer} onClick={handleAnswer.bind(this, answer)}>
                                    <p className=" text-center text-lg">{answer}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* Category and difficulty */}
                    <div className="flex space-x-4 justify-start w-4/5 mt-4">
                        <p>{gameQA.category}</p>
                        <p>Difficulty: {gameQA.difficulty}</p>
                    </div>
                </div>

                {/* Next question */}
                <div className="flex justify-center">
                    <button className="py-4 w-3/12 bg-[#163A5F] rounded-md" onClick={handleNextQ}>Next Question</button>
                </div>
            </div>
        </section>
    )
}