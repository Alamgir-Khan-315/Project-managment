import React from 'react'

const Admin_task = () => {
  return (
    <div className='container mx-auto'>
      <div className="body mt-[30px] text-center">
        <h1 className='text-2xl font-bold'>Task Menu</h1>

        <div className="task-box grid grid-cols-3 gap-[20px] mt-[30px] ">
          <div className="total-task bg-gray-600  font-bold  p-3 rounded-lg  cursor-pointer    hover:bg-blue-600 hover:ease-in-out transition hover:scale-105">Total task
            <h1 className='my-3  font-semibold'>Fetch from db</h1>
          </div>
          <div className="com-task bg-gray-600  font-bold p-3 rounded-lg cursor-pointer    hover:bg-blue-600 hover:ease-in-out hover:transition hover:scale-105">Completed task
            <h1 className='my-3 font-semibold'>Fetch from db</h1>
          </div>
          <div className="pend-task bg-gray-600 font-bold  p-3 rounded-lg  cursor-pointer  hover:bg-blue-600 hover:ease-in-out hover:transition hover:scale-105">Pending task
            <h1 className='my-3 font-semibold'>Fetch from db</h1>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="table-task-performed"> <h1 className='text-center font-bold text-xl mt-[30px]'>Task Details</h1>
        <table className='mt-[30px] w-full'>
          <thead>
            <tr className='items-center text-md font-bold text-center border-red-100 border'>
              <td className='border'>Sr no.</td>
              <td className='border w-[30%]'>Title</td>
              <td className='border'>Assign by</td>
              <td className='border'>Working by</td>
              <td className='border'>Status</td>
            </tr>
          </thead>

          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Admin_task;