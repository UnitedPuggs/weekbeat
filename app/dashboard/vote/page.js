import VoteButton from "@/components/VoteButton"

export default function Vote() {
    return (
        <div className="flex flex-col">
            <div className="justify-center items-center border-2 shadow-md mx-auto my-4">
                <h1 className="text-3xl font-semibold p-32">How are you feeling this week?</h1>
                <div className="flex flex-row">
                    <VoteButton style="vote-btn text-red-500 border-4 border-red-500 rounded-full" moodnumber={1} />
                    <VoteButton style="vote-btn text-orange-500 border-4 border-orange-500 rounded-full" moodnumber={2} />
                    <VoteButton style="vote-btn text-yellow-500 border-4 border-yellow-500 rounded-full" moodnumber={3} />
                    <VoteButton style="vote-btn text-green-300 border-4 border-green-300 rounded-full" moodnumber={4} />
                    <VoteButton style="vote-btn text-green-500 border-4 border-green-500 rounded-full" moodnumber={5} />
                </div>
            </div>
        </div>
    )
}