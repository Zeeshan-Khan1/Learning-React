# React Router Basics

## Installation
- npm install react-router-dom
- Basic Setup
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home Page</h1>; }
function About() { return <h1>About Page</h1>; }
function Contact() { return <h1>Contact Page</h1>; }
function NotFound() { return <h1>404 Not Found</h1>; }
```
## Dynamic Routes
```jsx
<Route path="/user/:id" element={<UserProfile />} />

function UserProfile() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
```
## Navigation
```jsx
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // login logic
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}
```
