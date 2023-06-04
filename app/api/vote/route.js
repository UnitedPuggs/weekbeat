import { supabase } from "@lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { id, username, vote_bracket, moodnumber } = await req.json();

    const { data, error } = await supabase
    .from('votes')
    .upsert(
        { id: id, username: username, vote_bracket: vote_bracket, moodnumber: moodnumber },
    )

    if(error)
        console.log(error)

    return NextResponse.json(data)
}