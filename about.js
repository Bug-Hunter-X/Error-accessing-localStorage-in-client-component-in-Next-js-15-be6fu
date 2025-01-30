```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About() {
  // This will cause an error if you don't handle it
  const user = JSON.parse(localStorage.getItem('user')) || null;

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