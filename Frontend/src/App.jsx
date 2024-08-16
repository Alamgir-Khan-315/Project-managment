import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Log_in from './Components/Log in/Log_in'
import Sign_up from './Components/Log in/Sign_up'

import Admin_home from './Components/Admin/Admin_home'
import User_home from './Components/User/User_home'
import Manager_home from './Components/Manager/Manager_home'

export default function App() {
  return (

    <div className='h-[100%] text-white'>


      <BrowserRouter>
        <Routes>

          {/* Log in part */}
          <Route path="/" element={<Log_in />} />
          <Route path="/Sign_up" element={<Sign_up />} />

          {/* Pages */}
          <Route path='/Admin_home/:id' element={<Admin_home />} />

          <Route path='/Manager_home/:id' element={<Manager_home />} />

          <Route path='/User_home/:id' element={<User_home />} />

        </Routes>
      </BrowserRouter>


    </div>

  )
}