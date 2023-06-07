import MoodChart from "@components/MoodChart"
import SuggestionsBox from "@components/SuggestionsBox"

export default function Dashboard() {
    return (
        <div >
            <MoodChart />
            <SuggestionsBox suggestionType={"celebrate_success"} suggestionTitle={"Successes"}/>
            <SuggestionsBox suggestionType={"share_frustration"} suggestionTitle={"Frustrations"}/>
            <SuggestionsBox suggestionType={"thank_colleague"} suggestionTitle={"Thanks"}/>
            <SuggestionsBox suggestionType={"suggest_idea"} suggestionTitle={"Ideas"}/>
        </div>
    )
}