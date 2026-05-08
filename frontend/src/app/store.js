import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../feature/auth/authSlice'
import ticketReducer from '../feature/tickets/ticketSlice' 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ticket: ticketReducer
  }
})
