import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  doneEditTodo,
  updateTodo,
} from './actions';

const App = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (!todo.trim() || todo.trim().length < 4) {
      toast.error('Todo cannot be empty or less than 4 characters', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    dispatch(
      addTodo({
        id: Date.now(),
        todo,
        completed: false,
        isEditing: false,
      })
    );

    setTodo('');
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEditTodo = (id) => {
    dispatch(editTodo(id));
  };

  const handleDoneEditTodo = (id) => {
    dispatch(doneEditTodo(id));
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    if (!updatedTodo.trim() || updatedTodo.trim().length < 3) {
      toast.error('Todo cannot be empty or less than 3 characters', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    dispatch(updateTodo(id, updatedTodo));
  };

  const taskStyle = {
    backgroundColor: '#E6E6FA',
  };

  return (
    <div className="container mt-4">
      <h1>Add todos</h1>
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
        />
        <button className="btn btn-primary mx-2" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <br />
      {todos.length !== 0 ? (
        <div className="my-2 border rounded bg-light">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="d-flex align-items-center"
              style={taskStyle}
            >
              {todo.isEditing ? (
                <input
                  type="text"
                  className="form-control"
                  value={todo.todo}
                  onChange={(e) =>
                    handleUpdateTodo(todo.id, e.target.value)
                  }
                  onBlur={() => handleDoneEditTodo(todo.id)}
                  autoFocus
                />
              ) : (
                <>
                  <div className="flex-grow-1">{todo.todo}</div>
                  <button
                    className="btn btn-secondary mx-2"
                    onClick={() => handleEditTodo(todo.id)}
                  >
                    Edit
                  </button>
                  <button
                    className={`btn btn-${todo.completed ? 'secondary' : 'success'}`}
                    onClick={() => handleToggleTodo(todo.id)}
                  >
                    {todo.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleRemoveTodo(todo.id)}
                  >
                    X
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Add todos</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;



             
