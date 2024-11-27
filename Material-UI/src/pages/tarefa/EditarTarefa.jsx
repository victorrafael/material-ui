import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  MenuItem,
  Select,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
} from '@mui/material';

const EditarTarefa = ({ handleCloseEditar, idTarefaSelecionada, tarefas, tarefa, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    setIdTarefa(idTarefaSelecionada);
    setTituloTarefa(tarefa.tituloTarefa);
    setDescricaoTarefa(tarefa.descricaoTarefa);
    setInicioTarefa(tarefa.inicioTarefa);
    setFimTarefa(tarefa.fimTarefa);
    setRecursoTarefa(tarefa.recursoTarefa);
    setStatusTarefa(tarefa.statusTarefa);
  }, [idTarefaSelecionada, tarefa]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleEditar = () => {
    setTarefas((current) =>
      current.map((obj) => {
        if (obj.idTarefa === idTarefaSelecionada) {
          return {
            ...obj,
            idTarefa: idTarefaSelecionada,
            tituloTarefa,
            descricaoTarefa,
            inicioTarefa,
            fimTarefa,
            recursoTarefa,
            statusTarefa,
          };
        }
        return obj;
      })
    );
    handleCloseEditar();
  };

  return (
    <Grid container spacing={2}>
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          bgcolor: 'background.paper',
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
        }}
      >
        <CardHeader
          title="Editar Tarefa"
          subheader="Atualize os detalhes da tarefa selecionada"
          sx={{
            backgroundColor: '#0288d1',
            color: 'white',
            textAlign: 'center',
          }}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Input
                  id="tarefa_titulo"
                  value={tituloTarefa}
                  onChange={(e) => setTituloTarefa(e.target.value)}
                  sx={{ padding: '10px' }}
                />
                <FormHelperText>Título da Tarefa</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <Input
                  id="tarefa_descricao"
                  value={descricaoTarefa}
                  onChange={(e) => setDescricaoTarefa(e.target.value)}
                  multiline
                  rows={3}
                  sx={{ padding: '10px' }}
                />
                <FormHelperText>Descrição da Tarefa</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  value={inicioTarefa}
                  onChange={(e) => setInicioTarefa(e.target.value)}
                />
                <FormHelperText>Data de Início</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <Input
                  id="tarefa_fim"
                  type="date"
                  value={fimTarefa}
                  onChange={(e) => setFimTarefa(e.target.value)}
                />
                <FormHelperText>Data de Fim</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  onChange={handleRecurso}
                >
                  <MenuItem value="Recurso 1">Recurso 1</MenuItem>
                  <MenuItem value="Recurso 2">Recurso 2</MenuItem>
                  <MenuItem value="Recurso 3">Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  onChange={handleStatus}
                >
                  <MenuItem value="Aguardando">Aguardando</MenuItem>
                  <MenuItem value="Em Andamento">Em Andamento</MenuItem>
                  <MenuItem value="Concluída">Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container justifyContent="flex-end" spacing={2} mt={2}>
            <Grid item>
              <Button
                size="medium"
                variant="contained"
                color="success"
                onClick={handleEditar}
              >
                Salvar
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="medium"
                variant="outlined"
                color="error"
                onClick={handleCloseEditar}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EditarTarefa;
