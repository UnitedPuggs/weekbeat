import SuggestionsCluster from "@components/SuggestionsCluster"
import VoteButton from "@components/VoteButton"

export default function Vote() {
    return (
        <>
        <div className="flex flex-col">
            <div className="justify-center items-center border-2 shadow-md mx-auto my-4">
                <h1 className="text-3xl font-semibold p-24 text-center">How are you feeling this week?</h1>
                <div className="flex flex-row">
                    <VoteButton style="vote-btn text-red-500 border-4 border-red-500 rounded-full hover:bg-red-500" moodnumber={1} />
                    <VoteButton style="vote-btn text-orange-500 border-4 border-orange-500 rounded-full hover:bg-orange-500" moodnumber={2} />
                    <VoteButton style="vote-btn text-yellow-500 border-4 border-yellow-500 rounded-full hover:bg-yellow-500" moodnumber={3} />
                    <VoteButton style="vote-btn text-green-300 border-4 border-green-300 rounded-full hover:bg-green-300" moodnumber={4} />
                    <VoteButton style="vote-btn text-emerald-400 border-4 border-emerald-400 rounded-full hover:bg-emerald-400" moodnumber={5} />
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="justify-center items-center border-2 shadow-md mx-auto text-center">
                <h1 className="text-3xl font-semibold p-2 mt-4">Would you like to...</h1>
                <SuggestionsCluster />
            </div>
        </div>
        </>
    )
}