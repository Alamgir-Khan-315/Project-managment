import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Project_Count_bar from '../../Common render/Project_Count_bar'

const Admin_Project = () => {

  const [Project, setProject] = useState([])

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

  // Local storage Single project details
  const SingleProject = (id, title, detail, assign, working, status) => {
    const ProjectDetails = [id, title, detail, assign, working, status]
    localStorage.setItem("Project Details", JSON.stringify(ProjectDetails))
  }

  return (
    <div className='container mx-auto'>

      {/* count bar */}
      <Project_Count_bar />

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
            </tr>
          </thead>

          <tbody>
            {Project.map((t, i) => {
              return <tr id={t._id} key="i"
                onClick={() => { SingleProject(t._id, t.Title, t.Detail, t.Assign_by, t.Working_by, t.Status) }}
                className='relative hover:bg-gray-900 my-2 border-blue-400 h-[50px] border-b-2'>
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