import { NextResponse, NextRequest } from "next/server";
import { supabase } from '@/lib/supabase'

export async function GET(req) {
    const id = req.nextUrl.searchParams.get("id")

    let { data: votes, error } = await supabase
    .from('votes')
    .select('moodnumber')
    .eq('id', id)

    if(error)
        console.log(error)
    
    return NextResponse.json(votes)
}