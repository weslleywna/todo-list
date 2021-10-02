const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress: { type: String, required: true },
    type: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    when: { type: Date, required: true },
    done: { type: Boolean, required: false, default: false },
    created: { type: Date, required: false, default: Date.now() }
});

module.exports = mongoose.model('Task', TaskSchema);