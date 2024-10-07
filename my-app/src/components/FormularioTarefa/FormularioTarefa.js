import React, { useState } from 'react';
import './FormularioTarefa.css';

function FormularioTarefa({ onAdicionarTarefa }) {
  const [descricao, setDescricao] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [prazo, setPrazo] = useState('');
  const [prioridade, setPrioridade] = useState('Baixa');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao && responsavel && prazo) {
      const novaTarefa = {
        descricao,
        responsavel,
        prazo,
        prioridade,
        completa: false
      };
      onAdicionarTarefa(novaTarefa);
      limparFormulario();
    } else {
      alert('Preencha todos os campos');
    }
  };

  const limparFormulario = () => {
    setDescricao('');
    setResponsavel('');
    setPrazo('');
    setPrioridade('Baixa');
  };

  return (
    <form id="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <input
        type="text"
        value={responsavel}
        onChange={(e) => setResponsavel(e.target.value)}
        placeholder="Responsável"
      />
      <input
        type="date"
        value={prazo}
        onChange={(e) => setPrazo(e.target.value)}
      />
      <select
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value)}
      >
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default FormularioTarefa;

