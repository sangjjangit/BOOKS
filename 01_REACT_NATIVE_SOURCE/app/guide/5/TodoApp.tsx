import Input from "@/components/guide/5/Input";
import Task from "@/components/guide/5/Task";
import { theme } from "@/constants/theme";
import { useEffect, useState } from "react";
import { Dimensions, StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SplashScreen } from "expo-router";
// import { AppLoading } from 'expo'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${ ({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  align-self: flex-start;
  margin: 20px;
`

const List = styled.ScrollView`
  flex: 1;
  width: ${({width}) => width - 40}px;
`

SplashScreen.preventAutoHideAsync();

const Todo = () => {
  const width = Dimensions.get('window').width

  const [isReady, setIsReady] = useState(false)
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState({})

  useEffect(() => {
    _loadTasks()
    setIsReady(true)
    if(isReady) {
      SplashScreen.hideAsync()
    }
  }, [isReady])

  const _handleTextChange = (text) => {
    setNewTask(text)
  }
  const _saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks))
      setTasks(tasks)
    } catch(e) {
      console.error(e)
    }
  }
  const _loadTasks = async () => {
    const loadedTasks = await AsyncStorage.getItem('tasks')
    setTasks(JSON.parse(loadedTasks || '{}'))
  }
  const _addTask = () => {
    const ID = Date.now().toString();
    const objNewTask = {
      [ID]: {id: ID, text: newTask, completed: false}
    }
    alert(`Add: ${newTask}`)
    setNewTask('')
    _saveTasks({...tasks, ...objNewTask})
  }
  const _deleteTask = (id) => {
    const currentTask = Object.assign({}, tasks)
    delete currentTask[id]
    _saveTasks(currentTask)
  }
  const _toggleTask = (id) => {
    const currentTask = Object.assign({}, tasks)
    currentTask[id]['completed'] = !currentTask[id]['completed']
    _saveTasks(currentTask)
  }
  const _updateTask = (item) => {
    const currentTask = Object.assign({}, tasks)
    currentTask[item.id] = item
    _saveTasks(currentTask)
  }
  const _onBlur = () => {
    setNewTask('')
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO List</Title>
        <Input
          placeholder="+Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
          onBlur={_onBlur}
        />
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map(item => (
              <Task item={item} deleteTask={_deleteTask} toggleTask={_toggleTask} updateTask={_updateTask} />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  )
}

export default Todo