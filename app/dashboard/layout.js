'use client'
import Nav from "@components/Nav";
import { useSession } from "next-auth/react";

export default function DashboardLayout({ children }) {
    const { data: session } = useSession()

    return (
        <>
        {session ? [<Nav />, children] : <h1>Not logged in</h1>}    
        </>
    )
}