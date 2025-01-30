```javascript
//pages/aboutSolution.js
export default function About() {
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) || null : null;

  if (!user) {
    return <p>Please log in.</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome, {user.name}</p>
    </div>
  );
}
```