'use client'

import { signIn } from 'next-auth/react'

export default function Login() {

    return (
        <div className="flex justify-center items-center h-screen">
            <button
                type="button"
                className="bg-black text-white rounded-lg drop-shadow-sm p-2"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
                    Login
            </button>
        </div>
    )
}