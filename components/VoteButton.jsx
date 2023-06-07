'use client'
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

async function castVote(id, username, vote_bracket, moodnumber) {
    fetch("/api/vote", {
        method: "POST",
        headers: {"Accept": "application/json"},
        body: JSON.stringify({id: id, username: username, vote_bracket: vote_bracket, moodnumber: moodnumber})
    })
}

export default function VoteButton({ style, moodnumber }) {
    const { data: session } = useSession()
    const [moodnum, setMoodNum] = useState(0)
    //Change state in onClick then useEffect on moodnum

    //useEffect(() => {
    //    
    //}, [moodnum])

    const date = new Date();
    let currentDate = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();

    return <button 
    id={moodnumber}
    className={style} 
    onClick={() => {
        castVote(session.user.email, session.user.name, currentDate, moodnumber)
        //setMoodNum({moodnumber})
    }}>
        {moodnumber}
    </button>
}