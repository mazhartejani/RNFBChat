import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native'
import { TextInput, Button, useTheme, List } from 'react-native-paper'

import { Message } from '../types/Message'
import { RootState } from '../redux-store/store'
import { useDispatch, useSelector } from 'react-redux'
import { onSendMessage } from '../redux-store/features/messages/messagesSlice'

const ChatDetails: React.FC = () => {
  const messages = useSelector((state: RootState) => state.messages)
  const dispatch = useDispatch()

  const theme = useTheme()
  const [message, setMessage] = useState('')

  const renderItem = ({ item }: { item: Message }) => (
    <List.Item
      title={item.text}
      description={item.sender}
      left={() => <List.Icon icon="chat" color={theme.colors.primary} />}
    />
  )

  const sendMessage = () => {
    dispatch(
      onSendMessage({
        id: (messages.length + 1).toString(),
        text: message,
        sender: 'Jane',
      }),
    )
    setMessage('')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <View style={styles.inputContainer}>
        <TextInput
          label="Message"
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />
        <Button mode="contained" onPress={sendMessage} style={styles.button}>
          Send
        </Button>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  input: {
    flex: 1,
    marginRight: 16,
  },
  button: {
    minWidth: 64,
  },
})

export default ChatDetails
