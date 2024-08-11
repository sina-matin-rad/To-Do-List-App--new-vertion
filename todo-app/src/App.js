// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Typography variant="h2" gutterBottom>Task Manager</Typography>
        <AddTaskForm />
        <TaskList />
      </Container>
    </Provider>
  );
}

export default App;
