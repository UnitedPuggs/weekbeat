import Suggestion from "./Suggestion";

export default function SuggestionsCluster() {
    return (
        <>
        <div className="grid grid-rows-2 grid-flow-col gap-2 p-10">
            <Suggestion suggestionText={"Suggest an idea"} suggestionStyle={"border-yellow-500 bg-yellow-100 text-yellow-700"} modalId={"idea"} suggestionType={"suggest_idea"} />
            <Suggestion suggestionText={"Celebrate a success"} suggestionStyle={"border-green-500 bg-green-100 text-green-700"} modalId={"sucess"} suggestionType={"celebrate_success"} />
            <Suggestion suggestionText={"Share a frustration"} suggestionStyle={"border-yellow-500 bg-yellow-100 text-yellow-700"} modalId={"frustration"} suggestionType={"share_frustration"} />
            <Suggestion suggestionText={"Thank a colleague"} suggestionStyle={"border-green-500 bg-green-100 text-green-700"} modalId={"thank"} suggestionType={"thank_colleague"} />
        </div>
        </>
    )
}