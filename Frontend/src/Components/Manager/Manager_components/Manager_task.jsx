import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Manager_task = () => {

  const [addForm, setaddForm] = useState(false)
  const [userName, setUserName] = useState('');
  const [Title, setTitle] = useState("");
  const [Detail, setDetail] = useState("");
  const [Task, setTask] = useState([])
  const TaskStatus = "Pending";

  // user data fetch
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/FetchData/${id}`)
      .then((res) => {
        console.log(res.data)
        setUserName(res.data.Name)
      })
      .catch(err => console.log(err))
  }, [id])

  const HandleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/AddTask", {
      Title,
      Detail,
      userName,
      TaskStatus
    })
      .then((res) => {
        console.log(res);
        alert("Success")
        setaddForm(!addForm)
        FetchTask()
      })
      .catch((err) => console.log(err));
  };

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
    <div className='container mx-auto relative'>
      <div className="body mt-[30px] text-center">
        <h1 className='text-2xl font-bold'>Task Menu</h1>

        <div className="task-box grid grid-cols-2 md:grid-cols-4 gap-[40px] mt-[30px] ">
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


      {/* Add task */}
      <div onClick={() => { setaddForm(!addForm) }} className="add_task cursor-pointer mt-[30px] p-3 font-bold w-fit rounded-lg bg-gray-600      hover:rounded-[50px] hover:ease-in-out transition hover:scale-105  hover:bg-blue-600 ">Add new task</div>
      {addForm === true &&
        <div className='Addform absolute backdrop-blur-sm top-[0] h-fit w-[100%]'>
          <form onSubmit={HandleSubmit} className='backdrop-blur-0 flex flex-col items-center bg-gray-600 rounded-lg mt-[5%] w-[50%] mx-auto'>

            <div className="title w-full px-[30px] mt-[10px] relative flex justify-between items-center">
              <h1 className='font-bold text-2xl pt-[20px]'>Add new project</h1>
              <div onClick={() => { setaddForm(!addForm) }}
                className="btn absolute right-[20px] top-[15px] p-2 px-3 w-fit rounded-lg bg-red-500 hover:bg-red-600 ">X</div>
            </div>

            <input className='mt-[30px] w-[80%] p-2 rounded-lg bg-gray-700 text-gray-400' type="text" value={userName} readOnly />
            <input onChange={(e) => setTitle(e.target.value)} className='mt-[30px] w-[80%] p-2 rounded-lg bg-gray-700' type="text" placeholder='Title' />
            <textarea className='my-[20px] w-[80%] p-2 rounded-lg bg-gray-700'
              onChange={(e) => setDetail(e.target.value)} placeholder='Project details' id="" rows={3}></textarea>

            <button type='submit' className='bg-green-600 p-2 px-5 rounded-lg my-[20px]     hover:ease-in-out transition hover:scale-105 hover:bg-green-700'>Add</button>
          </form>
        </div>
      }

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
              <td className='items-center text-md font-bold p-2 w-[100px]'>Status</td>
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

export default Manager_task;