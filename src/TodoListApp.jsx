import React, { useContext, useReducer } from 'react';
import styles from './TodoListApp.module.css';
import HeaderComponent from './todoComponents/Header-component';
import MainComponent from './todoComponents/Main-component';
import InputComponent from './todoComponents/Input-component';
import { TodoContext } from './context/todoContext';
import { TodoReducer } from './reducer/todoReducer';
import { useState } from 'react';




const filters = ['all', 'active', 'completed'];

const TodoListApp = (props) => {
    const [todoItems, dispatch] = useReducer(TodoReducer, []); 
    const [filter, setFilter] = useState(filters[0]);

    const getFilteredItems = (todos, filter) => {
        if(filter === 'all'){
            return todos;
        }
        return todos.filter(todo => todo.status === filter);
    };

    const filtered = getFilteredItems(todoItems, filter);

    const updateTodo = (todo) => {
        dispatch({ type:'update', todo});
    };

    const deleteTodo = (todo) => {
        dispatch({ type:'delete', todo});
    };

    const completedTodo = (todo) => {
        dispatch({ type:'completed', todo});
    };

    const { darkMode } = useContext(TodoContext);
    const bgStyle = darkMode ? 'gray' : 'pink';
  

    return(
        <div className={styles.app} style={{backgroundColor:`${bgStyle}`}}>
            <HeaderComponent filters={filters} filter={filter} onFilterChange={filter => setFilter(filter)}/>
            <MainComponent filtered={filtered} deleteTodo={deleteTodo} completedTodo={completedTodo} />
            <InputComponent updateTodo={updateTodo} />
        </div>
    );
};

export default TodoListApp;

const initialState = [
    {
        id: 1,
        title: '운동하기',
        status: 'active',
    },
    {
        id: 2,
        title: '리액트 공부',
        status: 'active',
    },
    {
        id: 3,
        title: '명상하기',
        status: 'active',
    },
];








// const [filteredItems, setFilteredItems] = useState([]);
 


// const updateTodo = (todo) => {
//     dispatch({ type:'update', todo});
//     setFilteredItems((prev) => ([...prev, todo]));
// };

// const deleteTodo = (todo) => {
//     dispatch({ type:'delete', todo});
//     setFilteredItems((prev) => prev.filter(item => item.id !== todo.id));
// };

// const completedTodo = (todo) => {
//     dispatch({ type:'completed', todo});
//     setFilteredItems((prev) => prev.map(item => {
//         if(item.id === todo.id){
//             item = todo;
//         }
//         return item;
//     }));
// };











// const allFilter = () => {
//     setFilteredItems(todoItems);
//     console.log(todoItems);
// };

// const activeFilter = () => {
//     setFilteredItems(todoItems.filter(item => item.active === true));
// };

// const completedFilter = () => {
//     setFilteredItems(todoItems.filter(item => item.completed === true));
// };















// const TodoListApp = (props) => {
//     const [todoItems, setTodoItems] = useState([]);
//     const [filteredItems, setFilteredItems] = useState([]);
 

//     const allFilter = () => {
//         setFilteredItems(todoItems);
//     };

//     const activeFilter = () => {
//         setFilteredItems(todoItems.filter(item => item.active === true));
//     };

//     const completedFilter = () => {
//         setFilteredItems(todoItems.filter(item => item.completed === true));
//     };



//     const updateTodo = (todo) => {
//         setTodoItems((prev) => ([...prev, todo]));
//         setFilteredItems((prev) => ([...prev, todo]));
//     };

//     const deleteTodo = (todo) => {
//         setTodoItems((prev) => prev.filter(item => item.id !== todo.id));
//         setFilteredItems((prev) => prev.filter(item => item.id !== todo.id));
//     };

//     const completedTodo = (todo) => {
//         setTodoItems((prev) => prev.map(item => {
//             if(item.id === todo.id){
//                 item = todo;
//             }
//             return item;
//         }));

//         setFilteredItems((prev) => prev.map(item => {
//             if(item.id === todo.id){
//                 item = todo;
//             }
//             return item;
//         }));
//     };

//     const { darkMode } = useContext(TodoContext);
//     const bgStyle = darkMode ? 'gray' : 'pink';
  

//     return(
//         <div className={styles.app} style={{backgroundColor:`${bgStyle}`}}>
//             <HeaderComponent todoItems={todoItems} allFilter={allFilter} activeFilter={activeFilter} completedFilter={completedFilter} />
//             <MainComponent filteredItems={filteredItems} deleteTodo={deleteTodo} completedTodo={completedTodo} />
//             <InputComponent updateTodo={updateTodo} />
//         </div>
//     );
// };

// export default TodoListApp;