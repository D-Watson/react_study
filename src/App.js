// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/Home';
import About from '../src/About';
import Contact from '../src/Contact';

const pages = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
];

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {pages.map((page) => (
              <li key={page.name}>
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {pages.map((page) => (
            <Route key={page.name} path={page.path} element={<page.component />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;