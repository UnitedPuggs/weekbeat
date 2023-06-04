import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { id, username, voted_on, moodnumber } = await req.json();

    const { data, error } = await supabase
    .from('votes')
    .upsert(
        { id: id, username: username, voted_on: voted_on, moodnumber: moodnumber },
    )

    if(error)
        console.log(error)

    return NextResponse.json(data)
}