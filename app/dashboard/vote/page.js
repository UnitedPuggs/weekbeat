import SuggestionsCluster from "@components/SuggestionsCluster"
import VoteButton from "@components/VoteButton"
import { getServerSession } from "next-auth"
import GoogleProvider from 'next-auth/providers/google';

export default async function Vote() {
    //auth options would probably be pretty well-suited as a lib object
    const session = await getServerSession({providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]})

    const res = await fetch(`http://localhost:3000/api/people/votes?id=${session.user.email}`)
    const selected = await res.json()

    return (
        <>
        <div className="flex flex-col flex-wrap">
            <div className="justify-center items-center border-2 shadow-md mx-auto my-4">
                <h1 className="text-3xl font-semibold p-24 text-center">How are you feeling this week?</h1>
                <div className="flex flex-row flex-wrap justify-center">
                    {selected[0].moodnumber != 1 
                    ? <VoteButton style="vote-btn text-red-500 border-4 border-red-500 rounded-full hover:bg-red-500" moodnumber={1} />
                    : <VoteButton style="vote-btn text-white border-4 border-red-500 rounded-full bg-red-500" moodnumber={1} />
                    }
                    
                    {selected[0].moodnumber != 2
                    ? <VoteButton style="vote-btn text-orange-500 border-4 border-orange-500 rounded-full hover:bg-orange-500" moodnumber={2} />
                    : <VoteButton style="vote-btn text-white border-4 border-orange-500 rounded-full bg-orange-500" moodnumber={2} />
                    }

                    {selected[0].moodnumber != 3
                    ? <VoteButton style="vote-btn text-yellow-500 border-4 border-yellow-500 rounded-full hover:bg-yellow-500" moodnumber={3} />
                    : <VoteButton style="vote-btn text-white border-4 border-yellow-500 rounded-full bg-yellow-500" moodnumber={3} />
                    }

                    {selected[0].moodnumber != 4
                    ? <VoteButton style="vote-btn text-green-300 border-4 border-green-300 rounded-full hover:bg-green-300" moodnumber={4} />
                    : <VoteButton style="vote-btn text-white border-4 border-green-300 rounded-full bg-green-300" moodnumber={4} />  
                    }

                    {selected[0].moodnumber != 5
                    ? <VoteButton style="vote-btn text-emerald-400 border-4 border-emerald-400 rounded-full hover:bg-emerald-400" moodnumber={5} />
                    : <VoteButton style="vote-btn text-white border-4 border-emerald-400 rounded-full bg-emerald-400" moodnumber={5} />
                    }

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