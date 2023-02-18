import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux-store/store'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Login from './src/screens/Login'
// import ChatList from './src/screens/ChatList'
import ChatDetails from './src/screens/ChatDetails'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="ChatList" component={ChatList} /> */}
          <Stack.Screen name="ChatDetails" component={ChatDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
