import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  const { user } = useSelector((state) => state.auth)
  
  useEffect(() => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    setCheckingStatus(false)
  }, [user])
  return { loggedIn, checkingStatus }
}

// Alternative Version

// import { useSelector } from 'react-redux'

// export const useAuthStatus = () => {
//   const { user } = useSelector((state) => state.auth)

//   const loggedIn = Boolean(user)
//   const checkingStatus = false

//   return { loggedIn, checkingStatus }
// }
