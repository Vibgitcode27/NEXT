import React from "react";
interface UserType
{
    id : number;
    name : string
}

async function UserPage()
{
        let res = await fetch("https://jsonplaceholder.typicode.com/users" , {cache : 'no-store'})
        // let res = await fetch("https://jsonplaceholder.typicode.com/users" , {next : {revalidate : 10}})
        // it get data every 10sec
    let result : UserType[] = await res.json()
    return (
        <div>
            <h1>User Page</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
            <ul>
                {result.map( user => <li>Hello {user.name}</li>)}
            </ul>
        </div>
    )
}
export default UserPage;