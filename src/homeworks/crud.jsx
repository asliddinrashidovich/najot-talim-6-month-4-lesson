import { useState } from "react"
import Userlists from "../components/userlists";

function Crud() {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [user, setUser] = useState([])
    // console.log(user)
    function handleSubmit(e) {
        e.preventDefault()
        let userInfo = {Fname: firstName, Lname: lastName, age: age}
        
        setUser((prev) => {
            return [...prev, userInfo]
        })
        setFirstname('')
        setLastname('')
        setAge(0)
    }
  return (
    <div className="w-full bg-green-500 py-[70px] px-[30px]">
        <h1 className="text-center py-[20px] text-[30px] text-[#fff]">CRUD Todo list</h1>
        <div className="max-w-[1000px] p-[30px] rounded-[15px] mx-auto gap-[20px] bg-[#fff] flex">
            <form className="gap-[10px] w-[40%] flex flex-col" onSubmit={handleSubmit}>
                <label>
                    <span>Enter your First name</span>
                    <input required onChange={(e) => setFirstname(e.target.value)} value={firstName} className="w-full border-[1px] rounded-[4px] p-[5px] mt-[5px]" type="text"/>
                </label>
                <label>
                    <span>Enter your Last name</span>
                    <input required onChange={(e) => setLastname(e.target.value)} value={lastName} className="w-full border-[1px] rounded-[4px] p-[5px] mt-[5px]" type="text" />
                </label>
                <label>
                    <span>Enter your age</span>
                    <input required onChange={(e) => setAge(e.target.value)} value={age} className="w-full border-[1px] rounded-[4px] p-[5px] mt-[5px]" type="number" />
                </label>
                <button type="submit" className="bg-[coral] rounded-[4px] p-[6px] text-[#fff] cursor-pointer mt-[10px]">submit</button>
            </form>
            <div className="w-[60%]">
                <div className="p-[5px] flex w-full mb-[8px]">
                    <span className="w-[200px] text-center text-[#555]">First name</span>
                    <span className="w-[200px] text-center text-[#555]">Last name</span>
                    <span className="text-center w-[200px] text-[#555]">age</span>
                </div>
                <Userlists user={user}/>
            </div>
        </div>
    </div>
  )
}

export default Crud