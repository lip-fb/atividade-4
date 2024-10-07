import React from 'react';
import './EstatisticasTarefas.css';

function EstatisticasTarefas({ tarefas }) {
  const totalTarefas = tarefas.length;
  const tarefasCompletas = tarefas.filter(tarefa => tarefa.completa).length;
  const tarefasPendentes = totalTarefas - tarefasCompletas;
  const tarefasPrioridadeAlta = tarefas.filter(tarefa => tarefa.prioridade === 'Alta').length;

  return (
    <div className="estatisticas-tarefas">
      <h2>Estatísticas das Tarefas</h2>
      <ul>
        <li>Total de Tarefas: {totalTarefas}</li>
        <li>Tarefas Completas: {tarefasCompletas}</li>
        <li>Tarefas Pendentes: {tarefasPendentes}</li>
        <li>Tarefas de Alta Prioridade: {tarefasPrioridadeAlta}</li>
      </ul>
    </div>
  );
}

export default EstatisticasTarefas;
