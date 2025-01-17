import React, { useState } from 'react';
let counter =4;
function App() {
  const [todos, setTodo] = useState([{
    id:1,
    title: 'hhhhh',
    description: 'description'
  },
  {
    id:2,
    title: 'iiii',
    description: 'assss'
  },{
    id:3,
    title: 'jjjjjj',
    description: 'samsk'
  }]);
  function AddTodo(){
    const newTodos = []   ;
    for(let i = 0; i < todos.length; i++){
      newTodos.push(todos[i]);
    }
    newTodos.push({
      id:counter++,
      title:Math.random(),
      description:Math.random()
    })  
    setTodo(newTodos);
  }
  
    return <div>
      <button onClick={AddTodo}>Add a todo</button>
       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)
       }
    </div>
}

function Todo({title ,description}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
  
}


export default App;
