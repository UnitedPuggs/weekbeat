import { supabase } from "@lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { id, vote_bracket, username, suggestionClass, suggestionText } = await req.json();

    const { data, error } = await supabase
    .from('suggestions')
    .upsert(
        { id: id, vote_bracket: vote_bracket, username: username, [suggestionClass]: suggestionText }
    )

    if(error)
        console.log(error)

    return NextResponse.json(data)
}

export async function GET(){ 
    let { data: suggestions, error } = await supabase
    .from('suggestions')
    .select('*')

    if(error)
        console.log(error)

    return NextResponse.json({ suggestions })
}