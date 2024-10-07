import React, { useState, useEffect } from 'react';
import './App.css';
import FormularioTarefa from './components/FormularioTarefa/FormularioTarefa';
import ListaTarefas from './components/ListaTarefas/ListaTarefas';

import Filtros from './components/Filtros/Filtros';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import EstatisticasTarefas from './components/EstatisticasTarefas/EstatisticasTarefas';


const maxTarefas = 10;

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [loading, setLoading] = useState(true);

  // Simula busca de dados
  useEffect(() => {
    const carregarTarefas = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        const tarefasIniciais = data.slice(0, maxTarefas).map(tarefa => ({
          descricao: tarefa.title,
          responsavel: 'Usuário',
          prazo: '2024-10-10',
          prioridade: 'Média',
          completa: tarefa.completed
        }));
        setTarefas(tarefasIniciais);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
      setLoading(false);
    };
    carregarTarefas();
  }, []);
  

  const adicionarTarefa = async (novaTarefa) => {
    if (tarefas.length < maxTarefas) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: novaTarefa.descricao,
            completed: novaTarefa.completa,
          }),
        });
  
        const tarefaCriada = await response.json();
        console.log('Tarefa adicionada:', tarefaCriada);
  
        setTarefas([...tarefas, novaTarefa]);
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
      }
    } else {
      alert('Número máximo de tarefas atingido');
    }
  };
  

  const alternarStatus = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].completa = !novasTarefas[index].completa;
    console.log(novasTarefas[index]);
    setTarefas(novasTarefas);
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  const editarTarefa = (index, tarefaAtualizada) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index] = tarefaAtualizada;
    setTarefas(novasTarefas);
  };

  const filtrarTarefas = (prioridade) => {
    setFiltro(prioridade);
  };

  const tarefasFiltradas = filtro
    ? tarefas.filter((tarefa) => tarefa.prioridade === filtro)
    : tarefas;

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <Filtros onFiltrar={filtrarTarefas} />
      <FormularioTarefa onAdicionarTarefa={adicionarTarefa} />
      <EstatisticasTarefas tarefas={tarefas} />
      {loading ? <LoadingSpinner /> : (
        <ListaTarefas
          tarefas={tarefasFiltradas}
          onAlternarStatus={alternarStatus}
          onRemoverTarefa={removerTarefa}
          onEditarTarefa={editarTarefa}
        />
      )}
       
    </div>
  );
}

export default App;
