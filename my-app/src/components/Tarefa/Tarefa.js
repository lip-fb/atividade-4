import React, { useState } from 'react';
import { MdCheck, MdUndo, MdEdit, MdDelete, MdSave } from 'react-icons/md';
import Card from '../Card/Card';
import './Tarefa.css';

function Tarefa({ tarefa, index, onAlternarStatus, onRemoverTarefa, onEditarTarefa }) {
  const [editando, setEditando] = useState(false);

  // Estados locais para todos os campos editáveis
  const [novaDescricao, setNovaDescricao] = useState(tarefa.descricao);
  const [novoResponsavel, setNovoResponsavel] = useState(tarefa.responsavel);
  const [novoPrazo, setNovoPrazo] = useState(tarefa.prazo);
  const [novaPrioridade, setNovaPrioridade] = useState(tarefa.prioridade);

  const handleSalvarEdicao = () => {
    const tarefaAtualizada = {
      ...tarefa,
      descricao: novaDescricao,
      responsavel: novoResponsavel,
      prazo: novoPrazo,
      prioridade: novaPrioridade,
    };
    onEditarTarefa(index, tarefaAtualizada);
    setEditando(false);
  };

  return (
    <Card>
      <div className={`tarefa prioridade-${tarefa.prioridade} ${tarefa.completa ? 'completa' : ''}`}>
        {editando ? (
          <div>
            <input
              type="text"
              value={novaDescricao}
              onChange={(e) => setNovaDescricao(e.target.value)}
              placeholder="Descrição da tarefa"
            />
            <input
              type="text"
              value={novoResponsavel}
              onChange={(e) => setNovoResponsavel(e.target.value)}
              placeholder="Responsável"
            />
            <input
              type="date"
              value={novoPrazo}
              onChange={(e) => setNovoPrazo(e.target.value)}
            />
            <select
              value={novaPrioridade}
              onChange={(e) => setNovaPrioridade(e.target.value)}
            >
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
        ) : (
          <span className={tarefa.completa ? 'completa' : ''}>
            {tarefa.descricao} (Responsável: {tarefa.responsavel}, Prazo: {tarefa.prazo}, Prioridade: {tarefa.prioridade})
          </span>
        )}

        <div className="botoes">
          <button onClick={() => onAlternarStatus(index)}>
            {tarefa.completa ? <MdUndo /> : <MdCheck />}
          </button>
          {editando ? (
            <button onClick={handleSalvarEdicao}>
              <MdSave />
            </button>
          ) : (
            <button onClick={() => setEditando(true)}>
              <MdEdit />
            </button>
          )}
          <button onClick={() => onRemoverTarefa(index)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </Card>
  );
}

export default Tarefa;
