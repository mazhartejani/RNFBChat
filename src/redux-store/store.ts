import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import chatsReducer from './features/chats/chatsSlice'
import messagesReducer from './features/messages/messagesSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chats: chatsReducer,
    messages: messagesReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
