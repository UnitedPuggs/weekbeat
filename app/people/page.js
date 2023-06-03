
export default async function People(){ 
    const res = await fetch('http://localhost:3000/api/people');
    const data = await res.json();
    console.log(data)
    return (
        <div>
            <h1>{data.data.name}</h1>
        </div>
    )
}