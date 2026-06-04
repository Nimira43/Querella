import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../feature/auth/authSlice'
import ticketReducer from '../feature/tickets/ticketSlice' 
import noteReducer from '../feature/notes/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
    notes: noteReducer
  }
})
