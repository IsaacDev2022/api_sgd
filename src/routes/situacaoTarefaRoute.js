const express = require('express');
const router = express.Router();
const situacaoTarefaService = require('../service/situacaoTarefaService');

router.get('/situacaotarefa', async function(req, res) {
    const situacoesTarefas = await situacaoTarefaService.getSituacaoTarefa();
    res.json(situacoesTarefas);
});

router.get('/situacaotarefa/:id', async function(req, res) {
    const { id } = req.params;
    const situacaoTarefa = await situacaoTarefaService.getSituacaoTarefaById(id);
    res.json(situacaoTarefa);
});

router.post('/situacaotarefa', async function(req, res) {
    const situacaoTarefa = {
        ds_situacao_tarefa: req.body.ds_situacao_tarefa
    }
    situacaoTarefaService.createSituacaoTarefa(situacaoTarefa);
    res.json({
        "status": 200,
        "message": "Situação de tarefa criada com sucesso"
    });
})

router.put('/situacaotarefa/:id', async function(req, res) {
    const { id } = req.params
    const situacaoTarefa = {
        ds_situacao_tarefa: req.body.ds_situacao_tarefa,
        dt_fim: req.body.dt_fim
    }
    situacaoTarefaService.updateSituacaoTarefa(id, situacaoTarefa);
    res.json({
        "status": 200,
        "message": "Situação de tarefa atualizada com sucesso"
    });
});

module.exports = router;