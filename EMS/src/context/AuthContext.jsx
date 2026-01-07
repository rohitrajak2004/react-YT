import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthProvider = createContext();

const AuthContext = ({children}) => {
  const [userData, setUserData] = useState(null)
  useEffect(()=>{
    const {employee,admin} = getLocalStorage();
    setUserData({employee,admin})
  },[])
  return (
    <div>
      <AuthProvider.Provider value={userData}>
        {children}
      </AuthProvider.Provider>
    </div>
  )
}

export default AuthContext