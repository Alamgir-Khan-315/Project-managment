import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Admin_Member = () => {

  const [users, setUser] = useState([])
  const [addForm, setaddForm] = useState(false)

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


        {/* Add manager */}
        <div onClick={() => { setaddForm(!addForm) }}
          className="add_members cursor-pointer mt-[30px] p-3 font-bold w-fit rounded-lg bg-gray-600      hover:rounded-[50px] hover:ease-in-out transition hover:scale-105  hover:bg-blue-600 ">Add a manager</div>
        {addForm === true &&
          <div className='Addform absolute backdrop-blur-sm top-[0] h-fit w-[100%]'>
            <form className='backdrop-blur-0 flex flex-col items-center bg-gray-600 rounded-lg mt-[5%] w-[50%] mx-auto'>

              <div className="title w-full px-[30px] mt-[10px] relative flex justify-between items-center">
                <h1 className='font-bold text-2xl pt-[20px]'>Add a manager</h1>
                <div onClick={() => { setaddForm(!addForm) }}
                  className="btn absolute right-[20px] top-[15px] p-2 px-3 w-fit cursor-pointer rounded-lg bg-red-500 hover:bg-red-600 ">X</div>
              </div>

              <input className='mt-[30px] w-[80%] p-2 rounded-lg bg-gray-700 text-gray-400' type="text" />
              <input className='mt-[30px] w-[80%] p-2 rounded-lg bg-gray-700' type="text" placeholder='Title' />
              <textarea className='my-[20px] w-[80%] p-2 rounded-lg bg-gray-700'
                placeholder='Project details' id="" rows={3}></textarea>

              <button type='submit' className='bg-green-600 p-2 px-5 rounded-lg my-[20px]     hover:ease-in-out transition hover:scale-105 hover:bg-green-700'>Add </button>
            </form>
          </div>
        }


        <div className="userdiv mt-[30px] flex flex-col justify-around gap-[60px] md:flex-row">
          <div className="manager border-blue-400 border-t-2 rounded-lg w-full">
            <h1 className='font-bold mt-[20px]'>Manager</h1>
            <table className='mt-[20px] w-full border-t-2 border-blue-400'>
              <thead className='bg-blue-400 text-left'>
                <tr className=''>
                  <td className='items-center text-md font-bold p-2 border-blue-400 border'>Sr. no.</td>
                  <td className='items-center text-md font-bold p-2 border-blue-400 border'>Name</td>
                  <td className=' text-md font-bold p-2 border-blue-400 border'>Email</td>
                  <td className='text-md font-bold p-2 border-blue-400 border w-[100px]'>Action</td>
                </tr>
              </thead>

              <tbody className='text-left'>
                {users.map((user, i) => {
                  if (user.Role === "Manager") {
                    return <tr key={user._id} className='my-2 border-blue-400 h-[50px] border-b-2'>
                      <td className='p-1'>{i + 1}</td>
                      <td className='p-1'>{user.Name}</td>
                      <td className='p-1'>{user.Email}</td>
                      <td>
                        <div className="btn flex gap-2">
                          <button className='p-1 rounded-lg w-full text-center bg-green-500 hover:bg-green-600 hover:ease-in-out transition hover:scale-105'>Edit</button>
                          <button className='p-1 rounded-lg text-center   bg-red-500 hover:bg-red-600 hover:ease-in-out transition hover:scale-105'>Delete</button>
                        </div>
                      </td>
                    </tr>
                  }
                })
                }
              </tbody>

            </table>


          </div>
          <div className="manager border-blue-400 border-t-2 rounded-lg w-full">
            <h1 className='font-bold mt-[20px]'>Employee</h1>
            <table className='mt-[20px] w-full'>
              <tr className='bg-blue-400 text-left'>
                <td className=' text-md font-bold p-2 border-blue-400 border'>Sr. no.</td>
                <td className=' text-md font-bold p-2 border-blue-400 border'>Name</td>
                <td className='text-md font-bold p-2 border-blue-400 border'>Email</td>
                <td className=' text-md font-bold p-2 border-blue-400 border'>Contact</td>
              </tr>

              <tbody className=' text-left'>
                {users.map((user, i) => {
                  if (user.Role === "Member") {
                    return <tr key={user._id} className='my-2 border-blue-400 h-[50px] border-b-2'>
                      <td className='p-1'>{i + 1}</td>
                      <td className='p-1'>{user.Name}</td>
                      <td className='p-1'>{user.Email}</td>
                      <td className='p-1'> {user.Number} </td>
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
