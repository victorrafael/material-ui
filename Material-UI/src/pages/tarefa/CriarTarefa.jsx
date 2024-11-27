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
  CardActions,
  Button,
} from '@mui/material';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    let proximoId =
      Math.max(...tarefas.map((tarefa) => tarefa.idTarefa), 0) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleSalvar = () => {
    setTarefas([
      ...tarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa,
      },
    ]);
    handleClose();
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
          title="Cadastro de Tarefa"
          subheader="Preencha os campos abaixo para adicionar uma nova tarefa"
          sx={{
            backgroundColor: '#1976d2',
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
                  aria-describedby="tarefa_titulo_helper_text"
                  value={tituloTarefa}
                  onChange={(e) => setTituloTarefa(e.target.value)}
                  sx={{ padding: '10px' }}
                />
                <FormHelperText id="tarefa_titulo_helper_text">
                  Título da Tarefa
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <Input
                  id="tarefa_descricao"
                  aria-describedby="tarefa_descricao_helper_text"
                  value={descricaoTarefa}
                  onChange={(e) => setDescricaoTarefa(e.target.value)}
                  multiline
                  rows={3}
                  sx={{ padding: '10px' }}
                />
                <FormHelperText id="tarefa_descricao_helper_text">
                  Descrição da Tarefa
                </FormHelperText>
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
                <FormHelperText>Início</FormHelperText>
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
                <FormHelperText>Fim</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  onChange={(e) => setRecursoTarefa(e.target.value)}
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
                  onChange={(e) => setStatusTarefa(e.target.value)}
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
                color="primary"
                onClick={handleSalvar}
              >
                Salvar
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="medium"
                variant="outlined"
                color="error"
                onClick={handleClose}
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

export default CriarTarefa;
