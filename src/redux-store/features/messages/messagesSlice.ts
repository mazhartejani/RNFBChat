import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Message } from '../../../types/Message'

const initialState: Message[] = [
  {
    id: '1',
    text: 'Hi there!',
    sender: 'John',
  },
  {
    id: '2',
    text: 'Hello!',
    sender: 'Jane',
  },
  {
    id: '3',
    text: 'How are you?',
    sender: 'John',
  },
  {
    id: '4',
    text: 'I am doing well, thanks for asking!',
    sender: 'Jane',
  },
]

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    onSendMessage: (state, action: PayloadAction<Message>) => {
      state.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { onSendMessage } = messagesSlice.actions

export default messagesSlice.reducer
