const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case 'EDIT_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isEditing: true,
          };
        }
        return todo;
      });
    case 'DONE_EDIT_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isEditing: false,
          };
        }
        return todo;
      });
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            todo: action.payload.updatedTodo,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;






