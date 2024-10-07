import React from 'react';
import './Filtros.css';

function Filtros({ onFiltrar }) {
  return (
    <div className="filtros">
      <label>Filtrar por prioridade:</label>
      <select onChange={(e) => onFiltrar(e.target.value)}>
        <option value="">Todas</option>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>
    </div>
  );
}

export default Filtros;
