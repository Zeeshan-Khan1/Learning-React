
# React Concepts Guide

## 1. What is React?
React is a JavaScript library for building user interfaces using components.

## 2. JSX
JSX allows writing HTML-like syntax inside JavaScript.
```jsx
const element = <h1>Hello World</h1>;
```

## 3. Components
Building blocks of React UI.

### Functional Component:
```jsx
function Hello() {
  return <h1>Hello Zeeshan</h1>;
}
export default Hello;
```

## 4. Props
Props pass data from parent to child.
```jsx
<Welcome name="Zeeshan" />

function Welcome(props) {
  return <h2>Hello {props.name}</h2>;
}
```

## 5. State (useState Hook)
State stores changing data.
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

## 6. Hooks
Hooks add features to functional components.

### useEffect Example:
```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

## 7. Events (onClick vs onChange)
```jsx
<button onClick={() => alert("Clicked")}>Click Me</button>
<input onChange={(e) => console.log(e.target.value)} />
```

## 8. map() Function Rendering Lists
```jsx
const users = ["Zeeshan", "Ali", "Hamza"];
return (
  <>
    {users.map((user, index) => <p key={index}>{user}</p>)}
  </>
);
```

## 9. Fragments <> </>
```jsx
<>
  <h1>Title</h1>
  <p>Description</p>
</>
```

## 10. Difference Between Fragment and div
- Fragment does NOT add extra HTML element.
- div adds a real HTML tag.

## 11. Vite
Vite is a fast build tool for React.

### Run project:
```
npm install
npm run dev
```

## 12. Vite Build Process
- Bundles code
- Minifies
- Tree shaking
- Produces `dist/` folder
```
npm run build
```

## 13. node_modules
Folder containing all installed packages required by the project.

## 14. package.json
Stores list of dependencies and project metadata.

## 15. Folder Structure Example
```
project/
  ├── node_modules/
  ├── src/
  │   ├── App.jsx
  │   └── components/
  ├── public/
  ├── package.json
  └── vite.config.js
```

## 16. Example Full Component Integration
```jsx
import { useState } from "react";

function App() {
  const [items, setItems] = useState(["Ali", "Hamza"]);

  return (
    <>
      <h1>User List</h1>
      {items.map((item, index) => <p key={index}>{item}</p>)}
    </>
  );
}

export default App;
```
