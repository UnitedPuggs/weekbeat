'use client'
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

async function castVote(id, username, vote_bracket, moodnumber) {
    fetch("/api/vote", {
        method: "POST",
        headers: {"Accept": "application/json"},
        body: JSON.stringify({id: id, username: username, vote_bracket: vote_bracket, moodnumber: moodnumber})
    })
}

export default function VoteButton({ style, moodnumber, color }) {
    const { data: session } = useSession()
    const router = useRouter()
    const path = usePathname()
    // const [ selectedStyle, setSelectedStyle ] = useState(style)
     const [ moodnum, setMoodNum ] = useState(0)

     useEffect(() => {
        router.refresh()
     }, [moodnum])
    // useEffect(() => {
    //     const getMood = async () => {
    //         const res = await fetch(`http://localhost:3000/api/people/votes?id=${session.user.email}`)
    //         const selected = await res.json()
            
    //         if(selected[0].moodnumber == moodnumber)
    //             setSelectedStyle(`vote-btn text-white bg-${color} border-4 border-${color} rounded-full`)
    //     }

    //     getMood()
    // }, [moodnum])

    const date = new Date();
    let currentDate = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();

    return <button 
    id={moodnumber}
    className={style} 
    onClick={() => {
        castVote(session.user.email, session.user.name, currentDate, moodnumber)
        setMoodNum({moodnumber})
    }}>
        {moodnumber}
    </button>
}