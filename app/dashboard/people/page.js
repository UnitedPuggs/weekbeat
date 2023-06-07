export default async function People(){ 
    
    const res = await fetch("https://weekbeat.vercel.app/api/people") // <-- some issue with the url? https://stackoverflow.com/questions/74966208/next-js-typeerror-failed-to-parse-url-from-api-projects-or-error-connect-econ
    const data = await res.json() 

    const users = data.users
    
    return (
        <div>
            {data?.users && users.map((user) => 
                <h1 className="m-2">{user.username}</h1>
            )}
        </div>
    )
}