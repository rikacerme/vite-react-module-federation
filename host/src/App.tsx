// filepath: /c:/Users/EmreCakir/Documents/vite-react-container/src/App.tsx
import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const RemoteApp1 = React.lazy(() => import('remoteApp1/App'));
const RemoteApp2 = React.lazy(() => import('remoteApp2/App'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <nav>
        <Link to="/">Ana Sayfa</Link> | <Link to="/remote1">Remote Uygulama 1</Link> | <Link to="/remote2">Remote Uygulama 2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Ana Sayfa</h1>} />
        <Route
          path="/remote1"
          element={
            <Suspense fallback={<div>Remote App 1 Yükleniyor...</div>}>
              <RemoteApp1 />
            </Suspense>
          }
        />
        <Route
          path="/remote2"
          element={
            <Suspense fallback={<div>Remote App 2 Yükleniyor...</div>}>
              <RemoteApp2 />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;