import { useState } from "react"

function Menubar() {
    const [menu, setMenu] = useState(false)
    function handleClick() {
        setMenu(true)
    }
    function handleClose() {
        setMenu(false)
    }
  return (
    <div>
        <div className="bg-green-500 absolute left-[100px] top-[30px]">
            <i className="fa-solid fa-bars text-[30px] cursor-pointer" onClick={handleClick}></i>
        </div>
        {menu && <div className={` w-full fixed top-[0] left-[0] bottom-[0] right-[0] `}>
            <div className="w-[40%] absolute left-0 backdrop-blur-[10px] text-[#fff] bg-[#555555d6] h-full p-[50px]">
                <div className={`${menu ? 'translate-x-[0]' : 'translate-x-[-100%]'} transition-all duration-[1s] flex justify-between items-center mb-[20px]`}>
                    <p className="text-[26px]">Menu</p>
                    <i className="fa-solid fa-xmark text-[30px] cursor-pointer" onClick={handleClose}></i>
                </div>
                <ul>
                    <li className="w-full border-[1px] pl-[15px] py-[5px] rounded-[5px] mb-[10px] hover:text-[#555] transition-all duration-[0.3s] cursor-pointer  hover:bg-[#fff]">Home</li>
                    <li className="w-full border-[1px] pl-[15px] py-[5px] rounded-[5px] mb-[10px] hover:text-[#555] transition-all duration-[0.3s] cursor-pointer  hover:bg-[#fff]">About</li>
                    <li className="w-full border-[1px] pl-[15px] py-[5px] rounded-[5px] mb-[10px] hover:text-[#555] transition-all duration-[0.3s] cursor-pointer  hover:bg-[#fff]">Services</li>
                    <li className="w-full border-[1px] pl-[15px] py-[5px] rounded-[5px] mb-[10px] hover:text-[#555] transition-all duration-[0.3s] cursor-pointer  hover:bg-[#fff]">Contact</li>
                    <li className="w-full border-[1px] pl-[15px] py-[5px] rounded-[5px] mb-[10px] hover:text-[#555] transition-all duration-[0.3s] cursor-pointer  hover:bg-[#fff]">FAQ</li>
                </ul>
            </div>
            <div className=" w-[60%] absolute right-0 h-full backdrop-blur-[2px]" onClick={handleClose}>

            </div>
        </div>}
    </div>
  )
}

export default Menubar