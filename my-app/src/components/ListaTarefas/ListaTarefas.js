import React from 'react';
import Tarefa from '../Tarefa/Tarefa';
import './ListaTarefas.css';
function ListaTarefas({ tarefas, onAlternarStatus, onRemoverTarefa, onEditarTarefa }) {
  return (
    <ul id="listaDeTarefas">
      {tarefas.map((tarefa, index) => (
        <Tarefa
          key={index}
          tarefa={tarefa}
          index={index}
          onAlternarStatus={onAlternarStatus}
          onRemoverTarefa={onRemoverTarefa}
          onEditarTarefa={onEditarTarefa}
        />
      ))}
    </ul>
  );
}

export default ListaTarefas;
