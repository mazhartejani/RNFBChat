import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const logo = require('../assets/img/logo.png')

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = () => {
    // handle login logic here
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
  },
})

export default LoginScreen
