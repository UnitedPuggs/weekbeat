import DispSuggestion from "./DisplayedSuggestion";

export default async function SuggestionsBox({ suggestionType, suggestionTitle }) {
    const res = await fetch("https://weekbeat.vercel.app/api/suggestions", { cache: 'no-store' })
    const data = await res.json();

    const suggestions = data.suggestions


    return (
        <div className="flex flex-col w-fit justify-center items-center my-4 mx-auto">
            <h1 className="font-bold">{suggestionTitle}</h1>
            <div className="grid grid-cols-2 grid-flow-row auto-rows-fr max-w-md gap-2 p-4 border-2 shadow-md">
                {data && suggestions.map((suggestion) => {
                    if(suggestion[suggestionType] != null)
                     return <DispSuggestion user={suggestion.username} suggestionText={suggestion[suggestionType]} suggestionType={suggestionType} />
                })}
            </div>
        </div>
    )
}