import React from 'react'

const Project_Count_bar = () => {
    return (
        <div>

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

        </div>
    )
}

export default Project_Count_bar
