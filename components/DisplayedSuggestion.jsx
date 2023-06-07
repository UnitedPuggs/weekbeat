export default function DispSuggestion({ user, suggestionText, suggestionType }) {
    let border = ''
    let bg = ''
    if(suggestionType == "share_frustration" || suggestionType == "suggest_idea") {
        border = "border-2 border-yellow-300 rounded-lg"
        bg = "pl-1 py-1 h-fit bg-yellow-300 font-semibold"
    } else {
        border = "border-2 border-green-300 rounded-lg"
        bg = "pl-1 py-1 h-fit bg-green-300 font-semibold"
    }

    return (
        <div className={border}>
            <div className={bg}>
                {user}
            </div>
            <p className="p-2">{suggestionText}</p>
        </div>
    )
}