const database = require('../db/database');

exports.getMotivoBloqueio = () => {
    return database.query('SELECT * FROM "SGD".tb_motivo_bloqueio');
}

exports.getMotivoBloqueioById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_motivo_bloqueio WHERE id_motivo_bloqueio = ${id}`);
}

exports.createMotivoBloqueio = (motivoBloqueio) => {
    return database.query(`INSERT INTO "SGD".tb_motivo_bloqueio (tx_motivo_bloqueio, dt_inicio) VALUES ('${motivoBloqueio.tx_motivo_bloqueio}', '${motivoBloqueio.dt_inicio}')`);
}

exports.updateMotivoBloqueio = (idMotivoBloqueio, motivoBloqueio) => {
    if(motivoBloqueio.dt_fim == null) {
        database.query(`UPDATE "SGD".tb_motivo_bloqueio SET tx_motivo_bloqueio = '${motivoBloqueio.tx_motivo_bloqueio}', dt_inicio = '${motivoBloqueio.dt_inicio}', dt_fim = NULL WHERE id_motivo_bloqueio = ${idMotivoBloqueio}`);
    }else{
        database.query(`UPDATE "SGD".tb_motivo_bloqueio SET tx_motivo_bloqueio = '${motivoBloqueio.tx_motivo_bloqueio}', dt_inicio = '${motivoBloqueio.dt_inicio}', dt_fim = '${motivoBloqueio.dt_fim}' WHERE id_motivo_bloqueio = ${idMotivoBloqueio}`);
    }
}