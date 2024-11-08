import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    setLocalStorage();
    const { employees, admins } = getLocalStorage()
    setUserData({ employees, admins });
  }, [])
  
  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider