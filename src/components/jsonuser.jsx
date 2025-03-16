import PropTypes from 'prop-types';

Jsonuser.propTypes = {
    users: PropTypes.array.isRequired
}


function Jsonuser({users}) {
  return (
    <div className="cards grid gap-10 grid-cols-1 md:grid-cols-2  px-8 pb-10">
                {users && users.map(item => (
                    <div key={item.id} className="bg-[#fafafa] w-full rounded-[10px] p-4">
                    <div className="flex gap-4 mb-4">
                      <div className="w-[90px] rounded-[10px] h-[90px] flex justify-center flex-col items-center bg-[#555] shrink-0">
                        <i className="fa-solid fa-user text-[60px]"></i>
                      </div>
                      <div>
                        <h3 className="text-[23px] font-semibold mb-2">${item.name}</h3>
                        <div className="gap-[10px] flex items-center text-[#3dabff]">
                          <i className="fa-solid fa-envelope"></i>
                          <span >${item.email}</span>
                        </div>
                        <div className="gap-[10px] flex items-center">
                          <i className="fa-solid fa-circle-user"></i>
                          <span>${item.username}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-location-dot"></i>
                        <p  className="text-[17px]">${item.address.street} street, ${item.address.suite}</p>
                      </div>
                      <p><b>City:</b> ${item.address.city}</p>
                      <i className="text-[14px]"><b>Zipcode:</b> ${item.address.zipcode}</i>
                      <div className="flex gap-2">
                        <i className="text-[13px]">lat: ${item.address.geo.lat}</i>
                        <i className="text-[13px]">lng: ${item.address.geo.lng}</i>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <i className="fa-solid fa-phone"></i>
                        <p className="text-[17px]">${item.phone}</p>
                      </div>
                      <p><b>Website:</b> <a href="https://${item.website}">${item.website}</a></p>
                      <div className="flex items-center gap-2 mt-3">
                        <i className="fa-solid fa-building"></i>
                        <p className="text-[17px]"><b>Company:</b> ${item.company.name}</p>
                      </div>
                      <p><b>CatchPhrase:</b> ${item.company.catchPhrase}</p>
                      <i><b>bs:</b> ${item.company.bs}</i>
                    </div>
                  </div>
                ))}
            </div>
  )
}

export default Jsonuser