import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Admin_task = () => {


  const TaskStatus = "Pending";
  const [Task, setTask] = useState([])

  const FetchTask = () => {
    axios.get('http://localhost:3001/GetTask')
      .then(tasks => {
        console.log(tasks.data);
        setTask(tasks.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    FetchTask()
  }, [])


  return (
    <div className='container mx-auto'>
      <div className="body mt-[30px] text-center">
        <h1 className='text-2xl font-bold'>Task Menu</h1>

        <div className="task-box grid grid-cols-2 md:grid-cols-4 gap-[40px] mt-[30px]">
          <div className="total-task bg-gray-600  font-bold  p-3 rounded-lg  cursor-pointer    hover:bg-blue-600 hover:ease-in-out transition hover:scale-105">Total task
            <h1 className='my-3  font-semibold'>Fetch from db</h1>
          </div>

          <div className="pend-task bg-gray-600 font-bold  p-3 rounded-lg  cursor-pointer  hover:bg-blue-600 hover:ease-in-out hover:transition hover:scale-105">Pending task
            <h1 className='my-3 font-semibold'>Fetch from db</h1>
          </div>

          <div className="com-task bg-gray-600  font-bold p-3 rounded-lg cursor-pointer    hover:bg-blue-600 hover:ease-in-out hover:transition hover:scale-105">Working on
            <h1 className='my-3 font-semibold'>Fetch from db</h1>
          </div>

          <div className="com-task bg-gray-600  font-bold p-3 rounded-lg cursor-pointer    hover:bg-blue-600 hover:ease-in-out hover:transition hover:scale-105">Completed task
            <h1 className='my-3 font-semibold'>Fetch from db</h1>
          </div>

        </div>
      </div>

      {/* table */}
      <div className="table-task-performed"> <h1 className='text-center font-bold text-xl mt-[30px]'>Task List</h1>
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
            {Task.map((t, i) => {
              return <tr className='my-2 border-blue-400 h-[50px] border-b-2'>
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

export default Admin_task;