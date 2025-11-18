# Additional Important Concepts

## 17. Conditional Rendering
```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

## 18. Default Props
```jsx
Button.defaultProps = { text: "Click Me" };
```

## 19. Destructuring Props
```jsx
function Card({ title, desc }) {
  return <h3>{title} - {desc}</h3>;
}
```

## 20. useRef Hook
```jsx
const inputRef = useRef();
```

## 21. Passing Functions as Props
```jsx
<Child greet={greet} />
```

## 22. Handling Form Inputs
```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

## 23. Key Prop in Lists
```jsx
<li key={item.id}>{item.name}</li>
```

## 24. Export & Import Syntax
```jsx
export default Hello;
import Hello from "./Hello";
```

## 25. useEffect Cleanup
```jsx
return () => clearInterval(timer);
```

## 26. React Strict Mode
```jsx
<React.StrictMode><App /></React.StrictMode>
```

## 27. Controlled Component
```jsx
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

## 28. Uncontrolled Component
```jsx
<input ref={emailRef} />
```

## 29. Lifting State Up
Sharing state between components through parent component.

## 30. Basics of React Router
```jsx
<Route path="/home" element={<Home />} />
```
