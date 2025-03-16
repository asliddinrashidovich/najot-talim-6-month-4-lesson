import PropTypes from 'prop-types';

Userlists.propTypes = {
    user: PropTypes.array.isRequired
}

function Userlists({user}) {
  return (
    <ul>
        {user && user.map(item => (
            <li key={item?.Fname} className="border-[1px] rounded-[4px]  p-[5px] flex w-full mb-[8px]">
                <span className="w-[200px] text-center">{item.Fname}</span>
               <span className="w-[200px] text-center">{item.Lname}</span>
                 <span className="text-center w-[200px]">{item.age}</span>
             </li> 
        ))}
    </ul>
  )
}

export default Userlists