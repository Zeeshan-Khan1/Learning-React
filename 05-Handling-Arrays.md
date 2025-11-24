# Handling Arrays in State

## Add to Array
```jsx
const [items, setItems] = useState([]);

const addItem = (newItem) => {
  setItems(prev => [...prev, newItem]); // Spread and add
};
```
Remove from Array
```jsx
const removeItem = (id) => {
  setItems(prev => prev.filter(item => item.id !== id));
};
```
Update Array
```jsx
const updateItem = (id, newData) => {
  setItems(prev => prev.map(item => 
    item.id === id ? { ...item, ...newData } : item
  ));
};
```
Example Component
```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos(prev => [...prev, { 
      id: Date.now(), 
      text: input 
    }]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={addTodo}>Add</button>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
      
    </div>
  );
}
```
