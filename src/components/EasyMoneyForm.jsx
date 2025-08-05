import React, { useState } from 'react';
import { createEasyMoney } from '../api/easyMoneyApi';

function EasyMoneyForm() {
  const [formData, setFormData] = useState({
    date: '',
    money: '',
    description: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await createEasyMoney(formData);
      setSuccessMessage('Registro guardado exitosamente');
      setFormData({ date: '', money: '', description: '' });
    } catch (error) {
      console.error('Error al guardar el registro:', error);
      setErrorMessage('Hubo un error al guardar el registro');
    }
  };

  return (
    <div>
      <h1>Registro EasyMoney</h1>

      <form onSubmit={handleSubmit}>
        <label>Fecha:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        /><br/>

        <label>Monto:</label>
        <input
          type="number"
          step="0.01"
          name="money"
          value={formData.money}
          onChange={handleChange}
          required
        /><br/>

        <label>Descripción:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        /><br/>

        <button type="submit">Guardar</button>
        <button
          type="button"
          onClick={() => window.location.href = '/web/easy-money'}
          style={{ marginLeft: '1rem' }}
        >
          Cancelar
        </button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default EasyMoneyForm;