
// action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// action creators
const addTodo = (text) => ({ type: ADD_TODO, text });
const toggleTodo = (index) => ({ type: TOGGLE_TODO, index });

// initial state
const initialState = {
  todos: [],
};

// reducer
function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: todos.map((todo, i) => {
          if (i === action.index) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

// store
const redux = require('redux');

const store = redux.createStore(todoApp);

// dispatch actions
store.disptach(addTodo('Learn Redux'));
store.disptach(addTodo('Build an app'));
store.disptach(toggleTodo(0));

// get the current state
console.log(store.getState());
