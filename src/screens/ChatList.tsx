import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { List, useTheme } from 'react-native-paper'
import { Chat } from '../types/Chat'
import { useSelector } from 'react-redux'
import { RootState } from '../redux-store/store'

const ChatList: React.FC = () => {
  const chats = useSelector((state: RootState) => state.chats)
  const theme = useTheme()

  const renderItem = ({ item }: { item: Chat }) => (
    <List.Item
      style={styles.chatItem}
      title={item.name}
      description={item.lastMessage}
      left={() => <List.Icon icon="chat" color={theme.colors.primary} />}
      onPress={() => console.log('Navigate to chat screen')}
    />
  )

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatItem: {
    padding: 20,
  },
})

export default ChatList
