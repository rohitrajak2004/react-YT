import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthProvider } from './context/AuthContext'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // })
  const [user, setUser] = useState(null)
  const userData =useContext(AuthProvider)

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
    }
    else if(email == 'user@me.com' && password == '123'){
      setUser('employee')
    }else {
      alert('Invalid Credentials')
    }
  }
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : '' }
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}

    </>
  )
}

export default App