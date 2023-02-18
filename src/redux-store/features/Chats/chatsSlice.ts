import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Chat } from '../../../types/Chat'

const initialState: Chat[] = [
  {
    id: '1',
    name: 'John',
    lastMessage: 'Hey, how are you?',
  },
  {
    id: '2',
    name: 'Jane',
    lastMessage: 'Did you finish that project yet?',
  },
  {
    id: '3',
    name: 'Alex',
    lastMessage: 'Let’s grab lunch sometime.',
  },
]

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<Chat>) => {
      state.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addChat } = chatSlice.actions

export default chatSlice.reducer
