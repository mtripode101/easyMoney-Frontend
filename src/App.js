import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EasyMoneyList from './components/EasyMoneyList';
import EasyMoneyForm from './components/EasyMoneyForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>EasyMoney Dashboard</h1>

        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/">Listado</Link> |{' '}
          <Link to="/nuevo">Nuevo Registro</Link>
        </nav>

        <Routes>
          <Route path="/" element={<EasyMoneyList />} />
          <Route path="/nuevo" element={<EasyMoneyForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;