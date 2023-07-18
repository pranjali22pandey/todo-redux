export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: id,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});

export const editTodo = (id) => ({
  type: 'EDIT_TODO',
  payload: id,
});

export const doneEditTodo = (id) => ({
  type: 'DONE_EDIT_TODO',
  payload: id,
});

export const updateTodo = (id, updatedTodo) => ({
  type: 'UPDATE_TODO',
  payload: { id, updatedTodo },
});
