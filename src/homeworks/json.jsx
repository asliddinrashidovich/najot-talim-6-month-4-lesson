import { useEffect, useState } from "react"
import Jsonuser from "../components/jsonuser"

function Json() {
    const [users, setUsers] = useState([])
    
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data)=> setUsers(data))
    }, [])
    console.log(users)

  return (
    <div className="bg-green-500">
        <h1 className="text-center py-[20px] text-[30px] text-[#fff]">Jsonplaceholder users</h1>
        <div className="max-w-[1000px] mx-auto">
            <Jsonuser users={users}/>
        </div>
    </div>
  )
}

export default Json