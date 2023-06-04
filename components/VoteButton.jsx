'use client'
import { useSession } from "next-auth/react"

async function castVote(id, username, voted_on, moodnumber) {
    fetch("http://localhost:3000/api/vote", {
        method: "POST",
        headers: {"Accept": "application/json"},
        body: JSON.stringify({id: id, username: username, voted_on: voted_on, moodnumber: moodnumber})
    })
}

export default function VoteButton({ style, moodnumber }) {
    const { data: session } = useSession()

    const date = new Date();
    let currentDate = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();

    return <button className={style} onClick={() => castVote(session.user.email, session.user.name, currentDate, moodnumber )}>{moodnumber}</button>
}