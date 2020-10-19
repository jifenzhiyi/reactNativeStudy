import 'react-native-gesture-handler'
import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigate, navRef, goBack } from '../utils/navService'

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeButton />
    </View>
  )
}

function HomeButton() {
  const [text, setText] = React.useState('admin')
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigate('Detail', { text, setText })}>
        <Text style={{ fontSize: 30 }}>管理员： {text}</Text>
    </TouchableOpacity>
  )
}

function DetailScreen(props) {
  const { route } = props
  const { text, setText } = route.params
  const [username, setUsername] = React.useState('')
  React.useEffect(() => {
    setUsername(text)
    return () => {
      console.log('clean')
    }
  }, [])
  return (
    <View style={styles.container}>
      <Input
        placeholder="输入用户名"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />
      <Text
        style={{ fontSize: 30 }}
        onPress={() => {
          setText(username)
          goBack()
        }}>返回上一页</Text>
    </View>
  )
}

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer ref={navRef}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  button: {
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
   },
})

export default App

// 暗号：建立清晰规范的数据处理流程
