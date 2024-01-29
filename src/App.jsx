// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CocheList from './components/coche/CocheList';
import CocheDetail from './components/coche/CocheDetail';
import CocheForm from './components/coche/CocheForm';
import NavbarComponent from './components/NavBar';
import './components/styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="container-content">
        <Routes>
          <Route path="/" element={<CocheList />} />
          <Route path="/coches" element={<CocheList />} />
          <Route path="/coches/:id" element={<CocheDetail />} />
          <Route path="/coches/new" element={<CocheForm />} />
          <Route path="/coches/edit/:id" element={<CocheForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
