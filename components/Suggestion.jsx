'use client'
function openModal(modalId) {
    document.getElementById(modalId).showModal(); 
}
 
 function closeModal(modalId) {
     document.getElementById(modalId).close()
}
export default function Suggestion({ modalId, suggestionText, suggestionStyle }) {

    return (
        <>
        <dialog id={modalId} className="rounded-lg">
            <p>{suggestionText}</p>
            <div className="flex flex-col">
                <textarea>

                </textarea>
                <button onClick={() => closeModal(modalId)}>close</button>
            </div> 
        </dialog>
        <button className={suggestionStyle + " cluster-btn"} onClick={() => openModal(modalId)}>{suggestionText}</button>
        </>
    )
}