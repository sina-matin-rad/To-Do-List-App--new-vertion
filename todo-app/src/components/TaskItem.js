// src/components/TaskItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/tasksSlice';
import { ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <ListItem>
      <Checkbox
        checked={task.completed}
        onChange={handleToggle}
      />
      <ListItemText primary={task.title} secondary={task.description} />
      <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
