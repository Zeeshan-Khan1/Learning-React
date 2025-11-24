# Advanced useState

## Functional Updates
Use when new state depends on previous state.

```jsx
const [count, setCount] = useState(0);

const increment = () => {
  setCount(prev => prev + 1); // Use previous value
};
