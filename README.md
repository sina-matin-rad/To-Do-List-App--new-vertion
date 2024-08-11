# To-Do List App

## Overview

This is a simple and functional To-Do List application built using React, Redux, and Material-UI. The application allows users to add, edit, delete, and manage their tasks. It is designed to be a practical project to demonstrate my skills in modern JavaScript development with React and state management with Redux.

## Features

- **Add Tasks:** Users can add new tasks with a title and description.
- **Edit Tasks:** Users can edit existing tasks.
- **Delete Tasks:** Users can delete tasks.
- **Toggle Task Completion:** Users can mark tasks as completed or incomplete.
- **Filter Tasks:** Users can filter tasks by their completion status.

## Project Structure

```plaintext
src/
│
├── components/
│   ├── AddTaskForm.js
│   ├── EditTaskForm.js
│   ├── TaskItem.js
│   └── TaskList.js
│
├── redux/
│   ├── store.js
│   ├── tasksSlice.js
│   └── userSlice.js
│
└── App.js
