import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Admin_Project = () => {


  const ProjectStatus = "Pending";
  const [Project, setProject] = useState([])
  const [DetailDev, setDetailDev] = useState(false)

  const FetchProject = () => {
    axios.get('http://localhost:3001/GetProject')
      .then(Projects => {
        console.log(Projects.data);
        setProject(Projects.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    FetchProject()
  }, [])

  const Detail = (id) => {
    setDetailDev(!DetailDev)

  }


  return (
    <div className='container mx-auto'>
      <div className="body mt-[30px] text-center">
        <h1 className='text-2xl font-bold'>Project Menu</h1>

        <div className="Project-box grid grid-cols-2 md:grid-cols-4 gap-[40px] mt-[30px]">
          <div className="total-Project bg-gray-600  font-bold  p-3 rounded-lg  cursor-pointer    hover:bg-blue-600 hover:ease-in-out transition hover:scale-105">Total Project
            <h1 className='my-3  font-semibold'>Fetch from db</h1>
          </div>

          <div className="pend-Project bg-gray-600 font-bold  p-3 rounded-lg  cursor-pointer  hover:bg-blue-600 hover:ease-in-out hover:transition hover:scale-105">Pending Project
            <h1 className='my-3 font-semibold'>Fetch from db</h1>
          </div>

          <div className="com-Project bg-gray-600  font-bold p-3 rounded-lg cursor-pointer    hover:bg-blue-600 hover:ease-in-out hover:transition hover:scale-105">Working on
            <h1 className='my-3 font-semibold'>Fetch from db</h1>
          </div>

          <div className="com-Project bg-gray-600  font-bold p-3 rounded-lg cursor-pointer    hover:bg-blue-600 hover:ease-in-out hover:transition hover:scale-105">Completed Project
            <h1 className='my-3 font-semibold'>Fetch from db</h1>
          </div>

        </div>
      </div>



      {/* table */}
      <div className="table-Project-performed"> <h1 className='text-center font-bold text-xl mt-[30px]'>Project List</h1>
        <table className='mt-[30px] w-full'>
          <thead>
            <tr className='bg-blue-400 h-[50px]'>
              <td className='items-center  w-[60px] text-md font-bold text-center'>Sr no.</td>
              <td className='items-center text-md font-bold p-2 w-[140px]'>Title</td>
              <td className='items-center text-md font-bold p-2 '>Details</td>
              <td className='items-center text-md font-bold p-2 w-[140px]'>Assign by</td>
              <td className='items-center text-md font-bold p-2 w-[140px]'>Woring by</td>
              <td className='items-center text-md font-bold p-2 w-[100px] text-center'>Status</td>
              <td className='items-center text-md font-bold p-2 w-[100px] text-center'>Details</td>
            </tr>
          </thead>

          <tbody>
            {Project.map((t, i) => {
              return <tr id={t._id} className='relative hover:bg-gray-900 my-2 border-blue-400 h-[50px] border-b-2'>
                <td className=' text-center p-1'>{i + 1}</td>
                <td className=' p-1'>{t.Title}</td>
                <td className=' p-1'>{t.Detail}</td>
                <td className='p-1'>{t.Assign_by}</td>
                <td className=' p-1 '>{t.Working_by}</td>
                {t.Status === "Pending" && <td className='text-center rounded-lg text-gray-500 flex items-center gap-2 justify-center mt-3'>
                  <div className="circle h-[10px] w-[10px] bg-gray-500 rounded-[50px]"></div> {t.Status}</td>}
                {t.Status === "Working" && <td className='text-center rounded-lg text-blue-500 flex items-center gap-2 justify-center mt-3'>
                  <div className="circle h-[10px] w-[10px] bg-blue-500 rounded-[50px]"></div>{t.Status}</td>}
                {t.Status === "Done" && <td className='text-center rounded-lg text-green-500 flex items-center gap-2 justify-center mt-3'>
                  <div className="circle h-[10px] w-[10px] bg-green-500 rounded-[50px]"></div>{t.Status}</td>}
                <td onClick={() => { Detail(id) }} className='p-1 cursor-pointer text-center'>Arrow</td>
                {
                  DetailDev === true &&
                  <div className='h-[100px]'>1
                    {t.Status === "Pending" && <h1>Project is on pending</h1>}
                    {t.Status === "Working" && <h1>Project is in working</h1>}
                    {t.Status === "Done" && <h1>Project has been done</h1>}
                  </div>
                }
              </tr>
            })
            }

          </tbody>

        </table>
      </div>

    </div>
  )
}

export default Admin_Project;