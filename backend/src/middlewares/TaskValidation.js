const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
    const { macaddress, type, title, description, when } = req.body;
    if (!macaddress)
        return res.status(400).json({error: 'macaddress é obrigatório'});
    if (!type)
        return res.status(400).json({error: 'Tipo é obrigatório'});
    if (!title)
        return res.status(400).json({error: 'Título é obrigatório'});
    if (!description)
        return res.status(400).json({error: 'Descrição é obrigatório'});
    if (!when)
        return res.status(400).json({error: 'Data e Hora são obrigatórios'});
    if (isPast(new Date(when)))
        return res.status(400).json({error: 'Escolha uma Data e Hora futura'});
    let exists; 
    if (req.params.id) {
        exists = await TaskModel.findOne(
            {
                '_id': {'$ne': req.params.id},
                'when': {'$eq': new Date(when)},
                'macaddress': {'$in': macaddress}
            }
        );
    } else {
        exists = await TaskModel.findOne(
            {
                'when': {'$eq': new Date(when)},
                'macaddress': {'$in': macaddress}
            }
        );
    }
    if (exists)
        return res.status(400).json({error: 'Você já tem uma tarefa nessa Data e Hora'});
    next();
};

module.exports = TaskValidation;