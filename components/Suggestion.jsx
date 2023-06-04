'use client'
import { useSession } from "next-auth/react";

function openModal(modalId) {
    document.getElementById(modalId).showModal(); 
}
 
 function closeModal(modalId) {
     document.getElementById(modalId).close()
}

async function castSuggestion(id, vote_bracket, username, suggestionType, suggestionText) {
    fetch("/api/suggestions", {
        method: "POST",
        headers: {"Accept": "application/json"},
        body: JSON.stringify({id: id, vote_bracket: vote_bracket, username: username, suggestionClass: suggestionType, suggestionText: suggestionText})
    })
}

export default function Suggestion({ modalId, suggestionText, suggestionStyle, suggestionType }) {
    const { data: session } = useSession()

    let date = new Date();
    let currentDate = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();

    return (
        <>
        <dialog id={modalId} className="rounded-lg">
            <p>{suggestionText}</p>
            <div className="flex flex-col">
                <textarea id={modalId + "-ta"} className="border-2 border-black rounded-lg"></textarea>
                <div>
                    <button 
                    className="m-1 py-1 px-4 border-2 border-emerald-400 rounded-full text-emerald-600 font-semibold bg-emerald-200 hover:opacity-75"
                    onClick={() => {
                        castSuggestion(session.user.email, currentDate, session.user.name, suggestionType, document.getElementById(modalId + "-ta").value)
                        closeModal(modalId)
                    }
                    }
                    >
                        add
                    </button>
                    <button 
                    className="m-1 py-1 px-2 border-2 border-gray-200 rounded-full text-gray-600 font-semibold bg-gray-200 hover:opacity-75" 
                    onClick={() => closeModal(modalId)}
                    >
                        close
                    </button>
                </div>
            </div> 
        </dialog>
        <button className={suggestionStyle + " cluster-btn"} onClick={() => openModal(modalId)}>{suggestionText}</button>
        </>
    )
}