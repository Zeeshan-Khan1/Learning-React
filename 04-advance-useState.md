# Advanced useState

## Functional Updates
Use when new state depends on previous state.

```jsx
const [count, setCount] = useState(0);

const increment = () => {
  setCount(prev => prev + 1); // Use previous value
};
```
## Lazy Initial State
For expensive calculations.

```jsx
const [data, setData] = useState(() => {
  return expensiveCalculation(); // Runs once
});
```
## Object State
Update objects properly.

```jsx
const [user, setUser] = useState({ name: '', age: 0 });

const updateName = (name) => {
  setUser(prev => ({ ...prev, name })); // Spread previous state
};
```
