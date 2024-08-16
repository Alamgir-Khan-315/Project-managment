import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Admin_Member = () => {

  const [users, setUser] = useState([])

  const FetchUser = () => {
    axios.get('http://localhost:3001/GetUser')
      .then(users => {
        console.log(users.data);
        setUser(users.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    FetchUser()
  }, [])

  const DelUser = (id, name) => {
    console.log("ufff" + name)
  }

  // const DelUser = ((Id, name) => {
  //   alert("button");
  //   if (window.confirm('Are to sure you wanna delete ${name}')) {
  //     axios.post(`http://localhost:3001/DelUser/${Id}`)
  //       .then(res => {
  //         setUsers(users.filter(user => user._id !== userId));
  //         FetchUser()
  //       })
  //       .catch(error => console.error('Error deleting user:', error));
  //   }
  // })

  return (
    <div className='Admin_member container mx-auto '>
      <div className="body mt-[30px] text-center">

        <h1 className='text-2xl font-bold'>User</h1>
        <div className="userdiv mt-[30px] flex flex-col justify-around gap-[60px] md:flex-row">
          <div className="manager border-blue-400 border rounded-lg w-full">
            <h1 className='font-bold mt-[20px]'>Manager</h1>
            <table className='mt-[20px] w-full'>
              <thead className='bg-blue-400'>
                <tr className=''>
                  <td className='items-center text-md font-bold text-center p-2 border-blue-400 border'>Sr. no.</td>
                  <td className='items-center text-md font-bold text-center p-2 border-blue-400 border'>Name</td>
                  <td className='items-center text-md font-bold text-center p-2 border-blue-400 border'>Email</td>
                  <td className='items-center text-md font-bold text-center p-2 border-blue-400 border'>Action</td>
                </tr>
              </thead>

              <tbody className='text-left'>
                {users.map((user, i) => {
                  if (user.Role === "Manager") {
                    return <tr key={user._id}>
                      <td className='border-blue-400 border'>{i + 1}</td>
                      <td className='border-blue-400 border'>{user.Name}</td>
                      <td className='border-blue-400 border'>{user.Email}</td>
                      <td><button onClick={() => { DelUser(user._id, user.Name) }} className='p-1 text-center w-full bg-red-500 hover:bg-red-600 hover:ease-in-out transition hover:scale-105'>Delete</button></td>
                    </tr>
                  }
                })
                }
              </tbody>

            </table>


          </div>
          <div className="manager border-blue-400 border rounded-lg w-full">
            <h1 className='font-bold mt-[20px]'>Employee</h1>
            <table className='mt-[20px] w-full'>
              <tr className='bg-blue-400'>
                <td className='items-center text-md font-bold text-center p-2 border-blue-400 border'>Sr. no.</td>
                <td className='items-center text-md font-bold text-center p-2 border-blue-400 border'>Name</td>
                <td className='items-center text-md font-bold text-center p-2 border-blue-400 border'>Email</td>
                <td className='items-center text-md font-bold text-center p-2 border-blue-400 border'>Action</td>
              </tr>

              <tbody className=' text-left'>
                {users.map((user, i) => {
                  if (user.Role === "Member") {
                    return <tr key={user._id}>
                      <td className='border-blue-400 border'>{i + 1}</td>
                      <td className='border-blue-400 border'>{user.Name}</td>
                      <td className='border-blue-400 border'>{user.Email}</td>
                      <td className='border-blue-400 border'>
                        <button onClick={() => { DelUser(user._id, user.Name) }} className='p-1 text-center w-full bg-red-500 hover:bg-red-600 hover:ease-in-out transition hover:scale-105'>Delete</button></td>
                    </tr>
                  }
                })
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Admin_Member
