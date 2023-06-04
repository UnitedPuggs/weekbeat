import { NextResponse } from "next/server";
import { supabase } from '@/lib/supabase'

export async function GET() { 
    let { data: users, error } = await supabase
    .from('users')
    .select('username')

    
    if(error)
        console.log(error)

    return NextResponse.json({ users })
}