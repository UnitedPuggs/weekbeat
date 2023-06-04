'use client'

import { useEffect, useState } from "react";

export default function People(){ 
    const [user, setUsers] = useState([]);

    useEffect(() => {
        const getPeople = async () => {
            const res = await fetch("http://localhost:3000/api/people")
            const data = await res.json()

            setUsers(data.users)
        }

        getPeople()
    }, [])
    console.log(user)
    
    return (
        <div>
            {user && user.map((users) => 
                <h1 className="m-2">{users.username}</h1>
            )}
        </div>
    )
}