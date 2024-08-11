// src/components/TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { List, Typography } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Tasks</Typography>
      <List>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </div>
  );
};

export default TaskList;
